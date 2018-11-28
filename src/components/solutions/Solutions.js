/* @flow */
import React from 'react';
import classnames from 'classnames';

import InterfacesSection from './InterfacesSection';
import APIsSection from './APIsSection';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function Solutions({ className, analytics }: Props) {
  return (
    <div className={classnames('solutions', className)}>
      <InterfacesSection analytics={analytics} />
      <APIsSection analytics={analytics} />
    </div>
  );
}
