/* @flow */
import React from 'react';
import classnames from 'classnames';

import Image from 'assets/images/Automation.png';

// $FlowFixMe
import './Solutions.scss';

type Props = {
  className?: ?string,
};

export default function AutomationImage({ className }: Props) {
  return (
    <div className={classnames('automation-image', className)}>
      <img src={Image} className="image" />
    </div>
  );
}
