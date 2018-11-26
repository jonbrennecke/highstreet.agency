/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Process.scss';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import Subtitle from '../subtitle/Subtitle';
import Button from '../button/Button';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function Process({ className, analytics }: Props) {
  return (
    <section className={classnames('process', className)}>
      <ContentMaxWidth className="process-inner">
        <Subtitle text="We work with startups, brands and founders to imagine new experiences for mobile, desktop and beyond." />
        <Button
          analytics={analytics}
          className="call-to-action-button"
          name="Process call-to-action button"
          text="See our process"
          onClick={() => {
            // TODO animate page transition to /projects
          }}
        />
      </ContentMaxWidth>
    </section>
  );
}
