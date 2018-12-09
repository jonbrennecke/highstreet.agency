/* @flow */
import React from 'react';
import classnames from 'classnames';

import Subtitle from '../../../subtitle/Subtitle';
import Title from '../../../title/Title';
import CallToActionLink from '../../../call-to-action-link/CallToActionLink';
import DevelopmentSolutionsList from '../../../development-solutions-list/DevelopmentSolutionsList';
import AnimateUpOnScroll from '../../../animated/AnimateUpOnScroll';

import type { Analytics } from '../../../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function HomePageDescriptionSection({
  className,
  analytics,
}: Props) {
  return (
    <div className={classnames('home-page-description-section', className)}>
      <AnimateUpOnScroll>
        <Title text="High Street connects startups with digital audiences" />
      </AnimateUpOnScroll>
      <AnimateUpOnScroll>
        <Subtitle text="We work with startups, founders and enterprise companies to create digital experiences that users love." />
      </AnimateUpOnScroll>
      <AnimateUpOnScroll>
        <CallToActionLink
          analytics={analytics}
          name="Process call-to-action button"
          text="See our process"
          to="/process"
        />
      </AnimateUpOnScroll>
      <AnimateUpOnScroll>
        <DevelopmentSolutionsList />
      </AnimateUpOnScroll>
    </div>
  );
}
