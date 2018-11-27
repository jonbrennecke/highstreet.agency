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
          this.state.isVisible && 'visible'
        )}
        style={{
          marginBottom: this.state.pageYOffset / 2
        }}
      >
        <svg
          width="46px"
          height="72px"
          viewBox="0 0 46 72"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
        >
          <g
            id="Website-Marketting-Page"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            transform="scale(0.8)"
          >
            <g
              id="Home-page"
              transform="translate(-697.000000, -745.000000)"
              fillRule="nonzero"
              stroke="#4259D9"
              strokeWidth="4"
            >
              <g id="Mouse" transform="translate(697.000000, 745.000000)">
                <path d="M23,16 L23,26" id="Line-2" strokeLinecap="round" />
                <rect
                  id="Rectangle"
                  x="2"
                  y="2"
                  width="42"
                  height="68"
                  rx="21"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
