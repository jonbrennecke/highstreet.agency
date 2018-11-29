/* @flow */
import React from 'react';
import classnames from 'classnames';

import Button from '../button/Button';
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
      <FeatureLeftSideImage className="" />
      <FeatureRightSideImage className="" />
      <h3>Join the amazing companies choosing High Street</h3>
      <Button
        analytics={analytics}
        className="feature-call-to-action"
        name="feature-call-to-action"
        text="Work with us"
        onClick={() => {
          // TODO
        }}
      />
    </aside>
  );
}
