/* @flow */
import React from 'react';
import classnames from 'classnames';

import Feature from '../feature/Feature';
import Section from './Section';
import InterfaceFigure from './InterfacesFigure';
import AutomationImage from './AutomationImage';
import AnimateUpOnScroll from '../animated/AnimateUpOnScroll';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function Solutions({ className, analytics }: Props) {
  return (
    <div className={classnames('solutions', className)}>
      <AnimateUpOnScroll className="animated-container">
        <Section
          className={classnames('solutions-ui', className)}
          analytics={analytics}
          name="Development"
          title="DEVELOPMENT"
          text="Our engineers will help you reach new audiences with top-notch software for every platform."
          buttonText="See our development process"
          renderFigure={() => <InterfaceFigure />}
        />
      </AnimateUpOnScroll>
      <AnimateUpOnScroll className="animated-container">
        <Feature analytics={analytics} />
      </AnimateUpOnScroll>
      <AnimateUpOnScroll className="animated-container">
        <Section
          className={classnames('solutions-automation', className)}
          isReversed={true}
          analytics={analytics}
          name="Automation"
          title="AUTOMATION"
          text="Our experienced DevOps team will scale your platform with strategies for streamlined automation, continuous integration and deployment."
          buttonText="Learn more"
          renderFigure={() => <AutomationImage />}
        />
      </AnimateUpOnScroll>
    </div>
  );
}
