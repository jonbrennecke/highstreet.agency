/* @flow */
import React, { Fragment } from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Body.scss';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import CallToActionButton from '../call-to-action-button/CallToActionButton';
import ScrollIndicator from '../scroll-indicator/ScrollIndicator';
import BodyBackground from '../body-background/BodyBackground';
import Solutions from '../solutions/Solutions';
import DevelopmentSolutionsList from '../development-solutions-list/DevelopmentSolutionsList';
import GetStarted from '../get-started/GetStarted';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function Body({ className, analytics }: Props) {
  return (
    <Fragment>
      <section className={classnames('body-subsection process', className)}>
        <ContentMaxWidth className="process-inner">
          <ScrollIndicator />
          <div className="below-scroll-content">
            <Title text="High Street connects startups with digital audiences" />
            <Subtitle text="We work with startups, founders and enterprise companies to create digital experiences that users love." />
            <CallToActionButton
              analytics={analytics}
              name="Process call-to-action button"
              text="See our process"
              onClick={() => {
                // TODO animate page transition to /projects
              }}
            />
            <DevelopmentSolutionsList />
          </div>
        </ContentMaxWidth>
      </section>
      <section className={classnames('body-subsection solutions', className)}>
        <BodyBackground />
        <ContentMaxWidth className="solutions-inner">
          <Solutions analytics={analytics} />
          <GetStarted analytics={analytics} />
        </ContentMaxWidth>
      </section>
    </Fragment>
  );
}
