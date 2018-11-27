/* @flow */
import React, { Component } from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './HeaderBackground.scss';

type Props = {
  className?: ?string,
};

export default class HeaderBackground extends Component<Props, {}> {
  render() {
    return (
      <div className={classnames('header-background', this.props.className)}>
        <svg
          className="svg-first"
          width="1440px"
          height="575px"
          viewBox="0 0 1440 575"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
        >
          <defs>
              <linearGradient x1="50%" y1="2.26923772%" x2="50%" y2="97.5117413%" id="linearGradient-1">
                  <stop stopColor="#697FFC" offset="0%"></stop>
                  <stop stopColor="#4259D9" offset="100%"></stop>
              </linearGradient>
          </defs>
          <g
            id="Website-Marketting-Page"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Home-page"
              transform="translate(0.000000, -2.000000)"
              fill="url(#linearGradient-1)"
              fillRule="nonzero"
            >
              <g id="Hero">
                <g id="Group-5">
                  <g id="Group-4">
                    <path
                      d="M0,2 L1440,2 L1440,228.350148 C1365.1499,321.4765 1255.09735,375.681486 1109.84235,390.965106 C891.959855,413.890536 793.432045,527.598982 545.830462,567.25904 C380.762739,593.699079 198.819252,566.314163 0,485.104292 L0,2 Z"
                      id="Rectangle"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          className="svg-second"
          width="1440px"
          height="666px"
          viewBox="0 0 1440 666"
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
          >
            <g id="Home-page" fill="#92A1F8" fillRule="nonzero">
              <g id="Hero">
                <g id="Group-5">
                  <g id="Group-4">
                    <path
                      d="M0,0 L1440,0 L1440,318.332811 C1338.80208,374.843618 1215.02083,411.680895 1068.65625,428.844644 C849.109375,454.590266 788.672672,611.481296 539.179687,656.020172 C372.851031,685.712756 193.124469,649.147971 0,546.325816 L0,0 Z"
                      id="Rectangle"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          className="svg-third"
          width="1440px"
          height="759px"
          viewBox="0 0 1440 759"
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
          >
            <g id="Home-page" fill="#B9C5FF" fillRule="nonzero">
              <g id="Hero">
                <g id="Group-5">
                  <g id="Group-4">
                    <path
                      d="M0,0 L1440,0 L1440,403.92845 C1334.07292,419.641529 1207.92708,437.571501 1061.5625,457.718364 C842.015625,487.938658 788.492984,695.188865 539,747.468741 C372.671344,782.321991 193.004677,738.167234 0,615.004469 L0,0 Z"
                      id="Rectangle"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
