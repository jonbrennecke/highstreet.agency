/* @flow */
import React from 'react';
import classnames from 'classnames';

import DotsImage from 'assets/images/FeatureDots.png';

type Props = {
  className?: ?string,
  id?: ?string,
};

export default function FeatureLeftSideImage({ className, id }: Props) {
  return (
    <div id={id} className={classnames('feature-image-left', className)} style={{ backgroundImage: `url(${DotsImage})`}} />
  );
}
