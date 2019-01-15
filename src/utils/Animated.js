// @flow
import React, { Component } from 'react';
import uuid from 'uuid';
import { autobind } from 'core-decorators';

type WindowScrollCallback = () => void;

// $FlowFixMe
@autobind
class WindowScrollListener {
  static sharedInstance: ?WindowScrollListener;

  isListening: boolean = false;
  updaters: Map<string, WindowScrollUpdater> = new Map();

  static getSharedInstance(): WindowScrollListener {
    if (!WindowScrollListener.sharedInstance) {
      WindowScrollListener.sharedInstance = new WindowScrollListener();
    }
    return WindowScrollListener.sharedInstance;
  }

  startListening() {
    window.addEventListener('scroll', this.handleScrollEvent);
  }

  stopListening() {
    window.removeEventListener('scroll', this.handleScrollEvent);
  }

  handleScrollEvent() {
    window.requestAnimationFrame(() => {
      this.onWindowDidScroll();
    });
  }

  onWindowDidScroll() {
    this.updaters.forEach(updater => {
      updater.callback();
    });
  }

  attach(callback: () => void) {
    if (!this.isListening) {
      this.startListening();
    }
    const updater = new WindowScrollUpdater(this, callback);
    this.updaters.set(updater.key, updater);
    return updater;
  }
}

// $FlowFixMe
@autobind
class WindowScrollUpdater {
  callback: WindowScrollCallback;
  listener: WindowScrollListener;
  key: string;

  constructor(listener: WindowScrollListener, callback: WindowScrollCallback) {
    this.callback = callback;
    this.listener = listener;
    this.key = uuid.v4();
  }

  detach() {
    this.listener.updaters.delete(this.key);
  }
}

type PassedProps = {};

export function bindScrollToWindow<Props, State>(
  // eslint-disable-next-line flowtype/generic-spacing
  WrappedComponent: Class<
    Component<Props & PassedProps, State> & { onWindowDidScroll: () => void }
  >
): Class<Component<Props, State>> {
  // $FlowFixMe
  @autobind
  class ComponentWrapper extends Component<Props, State> {
    updater: ?WindowScrollUpdater;
    ref: ?WrappedComponent;

    componentDidMount() {
      const listener = WindowScrollListener.getSharedInstance();
      this.updater = listener.attach(this.onWindowDidScroll);
    }

    componentWillUnmount() {
      if (!this.updater) {
        return;
      }
      this.updater.detach();
    }

    onWindowDidScroll() {
      if (!this.ref) {
        return;
      }
      this.ref.onWindowDidScroll();
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          ref={ref => {
            this.ref = ref;
          }}
        />
      );
    }
  }

  return ComponentWrapper;
}
