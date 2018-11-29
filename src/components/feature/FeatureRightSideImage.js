/* @flow */
import React from 'react';
import classnames from 'classnames';

import Image from 'assets/images/FeatureSquares.png';

type Props = {
  className?: ?string,
  id?: ?string,
};

export default function FeatureRightSideImage({ className, id }: Props) {
  return (
    <div id={id} className={classnames('feature-image-right', className)}>
      <img src={Image} />
    </div>
  );
}
