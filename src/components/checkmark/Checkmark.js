/* @flow */
import React from 'react';
import classnames from 'classnames';

type Props = {
  className?: ?string,
};

export default function Checkmark({ className }: Props) {
  return (
    <svg
      className={classnames('checkmark', className)}
      width="30px"
      height="22px"
      viewBox="0 0 30 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Website-Marketting-Page"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Home-page"
          transform="translate(-324.000000, -1165.000000)"
          fill="#A4EC99"
          fillRule="nonzero"
          stroke="#79BE90"
          strokeWidth="1.2"
        >
          <g id="Group-17" transform="translate(324.000000, 1158.000000)">
            <g id="Check-Mark" transform="translate(0.000000, 7.000000)">
              <path
                d="M26.2141396,1.0512933 L10.5163691,16.7490638 L3.30387989,9.53657467 C2.95240802,9.18510281 2.38255954,9.18510281 2.03108768,9.53657467 L0.970427509,10.5972348 C0.618955647,10.9487067 0.618955647,11.5185552 0.970427509,11.870027 L9.87997295,20.7795725 C10.2314448,21.1310444 10.8012933,21.1310444 11.1527652,20.7795725 L28.547592,3.38474567 C28.8990638,3.03327381 28.8990638,2.46342533 28.547592,2.11195347 L27.4869318,1.0512933 C27.1354599,0.699821433 26.5656115,0.699821433 26.2141396,1.0512933 Z"
                id="Path"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
