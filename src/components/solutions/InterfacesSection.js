/* @flow */
import React from 'react';
import classnames from 'classnames';

import InterfaceFigure from './InterfacesFigure';
import Section from './Section';

// $FlowFixMe
import './Solutions.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function InterfacesSection({ className, analytics }: Props) {
  return (
    <Section
      className={classnames('solutions-ui', className)}
      analytics={analytics}
      name="Interfaces"
      title="INTERFACES"
      text="We help you reach new audiences with software development for platforms like iOS, Android and web."
      buttonText="See our software development process"
      renderFigure={() => <InterfaceFigure />}
    />
  );
}
