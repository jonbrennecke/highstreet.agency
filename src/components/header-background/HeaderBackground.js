/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './HeaderBackground.scss';

type Props = {
  className?: ?string,
};

export default function HeaderBackground({ className }: Props) {
  return (
    <div className={classnames('header-background', className)}>
      <svg
        className="svg-first"
        width="1440px"
        height="807px"
        viewBox="0 0 1440 807"
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
          <g id="Home-page" fill="#4259D9" fillRule="nonzero">
            <g id="Hero">
              <g id="Group-5">
                <path
                  d="M0,0 L1440,0 L1440,425.382812 C1365.1499,527.127604 1255.09735,586.349026 1109.84235,603.047079 C891.959855,628.094158 793.432045,752.325826 545.830462,795.65625 C380.762739,824.543199 198.819252,794.623928 0,705.898438 L0,0 Z"
                  id="Rectangle"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg
        className="svg-second"
        width="1440px"
        height="930px"
        viewBox="0 0 1440 930"
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
                <path
                  d="M0,0 L1440,0 L1440,549.345961 C1338.80208,611.145595 1215.02083,651.43046 1068.65625,670.200558 C849.109375,698.355704 788.672672,869.930109 539.179688,918.637363 C372.851031,951.108866 193.124469,911.121995 0,798.676752 L0,0 Z"
                  id="Rectangle"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg
        className="svg-third"
        width="1440px"
        height="1068px"
        viewBox="0 0 1440 1068"
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
                <path
                  d="M-2.27373675e-13,0 L1440,0 L1440,678.854969 C1334.07292,696.033925 1207.92708,715.636586 1061.5625,737.662953 C842.015625,770.702504 788.492984,997.287118 539,1054.44419 C372.671344,1092.54891 193.004677,1044.27495 -2.27373675e-13,909.622306 L-2.27373675e-13,0 Z"
                  id="Rectangle"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
