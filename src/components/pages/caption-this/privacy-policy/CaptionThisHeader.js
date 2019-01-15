/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../../../layout/content-max-width/ContentMaxWidth';
import Navigation from '../../../navigation/Navigation';

// $FlowFixMe
import './CaptionThisHeader.scss';

import type { Analytics } from '../../../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function CaptionThisHeader({
  className,
  analytics,
}: Props) {
  return (
    <header className={classnames('header', className)}>
      <ContentMaxWidth className="header-inner">
        <Navigation analytics={analytics} />
      </ContentMaxWidth>
    </header>
  );
}
