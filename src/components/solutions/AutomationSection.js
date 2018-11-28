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

export default function AutomationSection({ className, analytics }: Props) {
  return (
    <Section
      className={classnames('solutions-automation', className)}
      analytics={analytics}
      name="Automation"
      title="AUTOMATION"
      text="Scale your team with a streamlined automation strategy, continuous integration (CI) and deployment (CI)."
      buttonText="See our development process"
      renderFigure={() => <div />}
    />
  );
}
