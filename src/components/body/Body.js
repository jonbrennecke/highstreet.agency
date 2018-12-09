/* @flow */
import React, { Fragment } from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Body.scss';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import ScrollIndicator from '../scroll-indicator/ScrollIndicator';
import BodyBackground from '../body-background/BodyBackground';
import Solutions from '../solutions/Solutions';
import GetStarted from '../get-started/GetStarted';
import HomePageDescriptionSection from './components/home-page-description-section/HomePageDescriptionSection';

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
          <HomePageDescriptionSection
            className="below-scroll-content"
            analytics={analytics}
          />
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
