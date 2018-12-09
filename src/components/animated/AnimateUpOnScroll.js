/* @flow */
import React, { Component } from 'react';
import classnames from 'classnames';
import { autobind } from 'core-decorators';

import { bindScrollToWindow } from '../../utils/Animated';

import type { Children } from '../../types/react';

// $FlowFixMe
import './AnimateUpOnScroll.scss';

type Props = {
  className?: ?string,
  children: Children,
};

type State = {
  isActive: boolean,
};

// $FlowFixMe
@autobind
@bindScrollToWindow
export default class AnimateUpOnScroll extends Component<Props, State> {
  state = {
    isActive: false,
  };

  element: ?HTMLDivElement;

  onWindowDidScroll() {
    if (!this.element) {
      return;
    }
    const scrollOffset = this.element.getBoundingClientRect().top;
    const isActive = window.scrollY >= scrollOffset;
    this.setState({ isActive });
  }

  render() {
    return (
      <div
        className={classnames(
          'animate-up',
          this.props.className,
          this.state.isActive && 'active'
        )}
        ref={ref => {
          this.element = ref;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
