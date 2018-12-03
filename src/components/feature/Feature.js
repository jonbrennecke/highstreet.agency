/* @flow */
import React from 'react';
import classnames from 'classnames';

import FlatCallToActionLink from '../flat-call-to-action-link/FlatCallToActionLink';
import FeatureLeftSideImage from './FeatureLeftSideImage';
import FeatureRightSideImage from './FeatureRightSideImage';

import type { Analytics } from '../../utils/Analytics';

// $FlowFixMe
import './Feature.scss';

type Props = {
  className?: ?string,
  id?: ?string,
  analytics: Analytics,
};

export default function Feature({ className, id, analytics }: Props) {
  return (
    <aside id={id} className={classnames('feature', className)}>
      <div className="feature-background-images">
        <FeatureLeftSideImage className="feature-image-left" />
        <FeatureRightSideImage className="feature-image-right" />
      </div>
      <div className="feature-heading-container">
        <h3>Join the amazing companies choosing High Street</h3>
      </div>
      <div className="feature-link-container">
        <FlatCallToActionLink
          analytics={analytics}
          className="feature-call-to-action"
          name="feature-call-to-action"
          text="Work with us"
          to="/contact"
        />
      </div>
    </aside>
  );
}
