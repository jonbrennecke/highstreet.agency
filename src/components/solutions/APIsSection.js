/* @flow */
import React from 'react';
import classnames from 'classnames';

import Section from './Section';

import type { Analytics } from '../../utils/Analytics';

// $FlowFixMe
import './Solutions.scss';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function APISection({ className, analytics }: Props) {
  return (
    <Section
      className={classnames('solutions-apis', className)}
      analytics={analytics}
      name="APIs"
      title="APIs"
      text="Accelerate your platform with API and back-end development designed to supercharge your growing startup."
      buttonText="See our API development process"
      renderFigure={() => <div />}
    />
  );
}
