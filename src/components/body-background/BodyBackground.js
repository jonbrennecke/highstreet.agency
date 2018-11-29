/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './BodyBackground.scss';

type Props = {
  className?: ?string,
};

export default function BodyBackground({ className }: Props) {
  return (
    <svg
      className={classnames('body-background', className)}
      width="1440px"
      height="1501px"
      viewBox="0 0 1440 1501"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stopColor="#B9C5FF" offset="0%" />
          <stop stopColor="#92A1F8" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="140.833566%"
          y1="119.054544%"
          x2="-19.4249391%"
          y2="-8.09190715%"
          id="linearGradient-2"
        >
          <stop stopColor="#FFDEE6" offset="0%" />
          <stop stopColor="#92A1F8" stop-Opacity="0.373075181" offset="100%" />
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
          transform="translate(0.000000, -1440.000000)"
          fillRule="nonzero"
        >
          <path
            d="M1440,1867.06154 C1246.99532,1990.22431 1067.32866,2034.37907 901,1999.52582 C651.507016,1947.24594 597.984375,1739.99573 378.4375,1709.77544 C232.072917,1689.62858 105.927083,1671.6986 4.70734562e-14,1655.98552 L0,1573 C101.197917,1629.08655 224.979167,1665.64727 371.34375,1682.68216 C590.890625,1708.2345 651.327328,1863.94767 900.820313,1908.15217 C1067.14897,1937.62184 1246.87553,1901.33156 1440,1799.28135 L1440,1867.06154 Z"
            id="Path"
            fill="url(#linearGradient-1)"
          />
          <path
            d="M1440,2941.01562 C1261.48781,2831.23452 1155.41705,2775.125 975.328125,2775.125 C795.239205,2775.125 643.31413,2849.40549 523.233607,2891.05517 C324.594386,2959.95278 150.183184,2944.92137 4.44533299e-13,2845.96094 L-4.54747351e-13,1488.03437 C86.2677339,1456.04912 189.181612,1440.05649 308.741634,1440.05649 C488.081667,1440.05649 649.136571,1473.37268 899.322591,1540.88748 C1066.11327,1585.89734 1231.10039,1585.89734 1440,1516.56574 L1440,2941.01562 Z"
            id="Path"
            fill="url(#linearGradient-2)"
            opacity="0.637160528"
            transform="translate(720.000000, 2190.536059) scale(-1, 1) translate(-720.000000, -2190.536059) "
          />
        </g>
      </g>
    </svg>
  );
}
