/* @flow */
import React from 'react';
import classnames from 'classnames';

import InterfacesFigureImage from 'assets/images/interfaces-figure-2x.png';

// $FlowFixMe
import './Solutions.scss';

type Props = {
  className?: ?string,
};

export default function InterfacesFigure({ className }: Props) {
  return (
    <div className={classnames('interfaces-figure', className)}>
      <img src={InterfacesFigureImage} className="image" />
    </div>
  );
}
