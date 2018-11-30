/* @flow */
import React from 'react';
import classnames from 'classnames';

type Props = {
  className?: ?string,
};

export default function FooterBackground({ className }: Props) {
  return (
    <svg
      className={classnames('footer', className)}
      width="1440px"
      height="376px"
      viewBox="0 0 1440 376"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <rect id="path-1" x="0" y="0" width="1440" height="376" />
      </defs>
      <g
        id="Website-Marketting-Page"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Home-page" transform="translate(0.000000, -3693.000000)">
          <g id="Footer" transform="translate(0.000000, 3693.000000)">
            <g
              id="Footer-background"
              transform="translate(720.000000, 188.000000) scale(-1, -1) translate(-720.000000, -188.000000) "
            >
              <g id="Rectangle-+-Rectangle-Mask">
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1" />
                </mask>
                <g id="Mask" fillRule="nonzero" />
                <path
                  d="M0,-376 L1440,-376 L1440,182.039063 C1137.70313,182.960937 864.369792,201.486979 620,237.617187 C375.630208,273.747396 168.963542,319.875 0,376 L0,-376 Z"
                  id="Rectangle"
                  fill="#5D5875"
                  fillRule="nonzero"
                  mask="url(#mask-2)"
                />
                <path
                  d="M-9.09494702e-13,-376 L1440,-376 L1440,101.787109 C1346.66667,96.9291695 1166,102.416833 898,118.2501 C630,134.083367 330.666667,170.333333 -9.09494702e-13,227 L-9.09494702e-13,-376 Z"
                  id="Rectangle"
                  fill="#2C292D"
                  fillRule="nonzero"
                  mask="url(#mask-2)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
