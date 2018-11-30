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
      height="752px"
      viewBox="0 0 1440 752"
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
        <g id="Home-page" transform="translate(0.000000, -3693.000000)">
          <g id="Footer" transform="translate(0.000000, 3693.000000)">
            <g
              id="Footer-background"
              transform="translate(720.000000, 378.000000) scale(-1, -1) translate(-720.000000, -378.000000) "
              fillRule="nonzero"
            >
              <path
                d="M0,63 L1440,63 L1440,560.938252 C1137.70312,562.594001 864.369792,581.486979 620,617.617187 C375.630208,653.747396 168.963542,699.875 0,756 L0,63 Z"
                id="Rectangle"
                fill="#5D5875"
              />
              <path
                d="M0,0 L1440,0 L1439,481.359375 C1346.33333,476.786591 1166,482.416833 898,498.2501 C630,514.083367 330.666667,550.333333 0,607 L0,0 Z"
                id="Rectangle"
                fill="#2C292D"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
