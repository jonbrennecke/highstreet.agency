/* @flow */
import React, { Fragment } from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Body.scss';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import Subtitle from '../subtitle/Subtitle';
import CallToActionButton from '../call-to-action-button/CallToActionButton';
import ScrollIndicator from '../scroll-indicator/ScrollIndicator';
import BodyBackground from '../body-background/BodyBackground';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function Body({ className, analytics }: Props) {
  return (
    <Fragment>
      <section className={classnames('process', className)}>
        <ContentMaxWidth className="process-inner">
          <ScrollIndicator />
          <div className="below-scroll-content">
            <Subtitle text="We work with startups, founders and brands to create new experiences for mobile, desktop and beyond." />
            <CallToActionButton
              analytics={analytics}
              name="Process call-to-action button"
              text="See our process"
              onClick={() => {
                // TODO animate page transition to /projects
              }}
            />
          </div>
        </ContentMaxWidth>
      </section>
      <section className={classnames('solutions', className)}>
        <BodyBackground />
        <ContentMaxWidth className="solutions-inner">
          {/* TODO */}
        </ContentMaxWidth>
      </section>
    </Fragment>
  );
}
