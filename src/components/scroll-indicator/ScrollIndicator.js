// @flow
import React, { Component } from 'react';
import classnames from 'classnames';
import { autobind } from 'core-decorators';

// $FlowFixMe
import './ScrollIndicator.scss';

type Props = {
  className?: ?string,
};

type State = {
  isVisible: boolean,
  pageYOffset: number,
};

// $FlowFixMe
@autobind
export default class ScrollIndicator extends Component<Props, State> {
  state = {
    isVisible: true,
    pageYOffset: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvent);
  }

  handleScrollEvent() {
    window.requestAnimationFrame(() => {
      this.onScroll();
    });
  }

  onScroll() {
    if (window.pageYOffset > 100) {
      this.setState({
        isVisible: false,
        pageYOffset: window.pageYOffset,
      });
    } else {
      this.setState({
        isVisible: true,
        pageYOffset: window.pageYOffset,
      });
    }
  }

  render() {
    return (
      <div
        className={classnames(
          'scroll-indicator',
          this.props.className,
          this.state.isVisible && 'visible',
          'animated' // TODO
        )}
        style={{
          marginBottom: this.state.pageYOffset / 2
        }}
      >
        <div id="mouse-outline">
          <div id="mouse-wheel"/>
        </div>
        <h1 className="scroll-text">scroll</h1>
      </div>
    );
  }
}
