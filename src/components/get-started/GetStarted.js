/* @flow */
import React from 'react';
import classnames from 'classnames';

import Title from '../title/Title';
import FlatCallToActionButton from '../flat-call-to-action-button/FlatCallToActionButton';
import FounderFeatureImage from 'assets/images/FounderFeature.png';

// $FlowFixMe
import './GetStarted.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function GetStarted({ className, analytics }: Props) {
  return (
    <section className={classnames('get-started', className)}>
      <div className="description">
        <Title text="Get started with High Street today" />
        <p className="paragraph">
          High Street offers a wide range of solutions to help you launch your
          next mobile app, website or platform.
        </p>
        <FlatCallToActionButton
          analytics={analytics}
          name="get-started-call-to-action-button"
          className="call-to-action"
          text="Work with us"
          onClick={() => {
            // TODO transition to /contact page
          }}
        />
      </div>
      <div className="image">
        <img className="founder-feature-image" src={FounderFeatureImage} />
      </div>
    </section>
  );
}
