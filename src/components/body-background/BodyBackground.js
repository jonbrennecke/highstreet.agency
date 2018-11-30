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
      height="2190px"
      viewBox="0 0 1440 2190"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
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
          <stop stopColor="#92A1F8" stopOpacity="0.373075181" offset="100%" />
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
          <g
            id="Group-10"
            transform="translate(0.000000, 1329.000000)"
            fill="#E3E7FE"
          >
            <path
              d="M2,1156 L1440,1151 L1440,2288.56762 C1135.42017,2334.28817 886.668964,2253.9044 693.746382,2047.41634 C500.8238,1840.92827 270.572019,1729.02229 2.99104066,1711.69841 L2,1156 Z"
              id="Rectangle"
            />
          </g>
          {/* <path
            d="M1440,1867.02323 C1246.99532,1990.16995 1067.32866,2034.31895 901,1999.47024 C651.507016,1947.19718 597.984375,1739.97398 378.4375,1709.75762 C232.072917,1689.61338 105.927083,1671.68574 4.70734562e-14,1655.97471 L0,1573 C101.197917,1629.07924 224.979167,1665.6352 371.34375,1682.66787 C590.890625,1708.21688 651.327328,1863.90976 900.820313,1908.1085 C1067.14897,1937.57433 1246.87553,1901.28878 1440,1799.25186 L1440,1867.02323 Z"
            id="Path"
            fill="url(#linearGradient-1)"
          /> */}
          <path
            d="M1440,2782 C1261.48781,2683.84527 1155.41705,2633.67803 975.328125,2633.67803 C795.239205,2633.67803 643.31413,2700.09184 523.233607,2737.33061 C324.594386,2798.93161 150.183184,2785.49211 8.9928065e-13,2697.01208 L0,1482.89678 C86.2677339,1454.29893 189.181612,1440 308.741634,1440 C488.081667,1440 649.136571,1469.78784 899.322591,1530.15247 C1066.11327,1570.39557 1231.10039,1570.39557 1440,1508.40653 L1440,2782 Z"
            id="Path"
            fill="url(#linearGradient-2)"
            opacity="0.637160528"
            transform="translate(720.000000, 2111.000000) scale(-1, 1) translate(-720.000000, -2111.000000) "
          />
        </g>
      </g>
    </svg>
  );
}
