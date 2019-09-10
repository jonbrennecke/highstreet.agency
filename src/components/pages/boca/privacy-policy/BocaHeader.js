/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../../../layout/content-max-width/ContentMaxWidth';
import Navigation from '../../../navigation/Navigation';

// $FlowFixMe
import './BocaHeader.scss';

import type { Analytics } from '../../../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function BocaHeader({ className, analytics }: Props) {
  return (
    <header className={classnames('privacy-policy-header', className)}>
      <ContentMaxWidth className="header-inner">
        <Navigation analytics={analytics} />
      </ContentMaxWidth>
    </header>
  );
}
