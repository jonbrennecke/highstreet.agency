/* @flow */
import React from 'react';
import classnames from 'classnames';

import InterfacesSection from './InterfacesSection';
import AutomationSection from './AutomationSection';
import Feature from '../feature/Feature';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function Solutions({ className, analytics }: Props) {
  return (
    <div className={classnames('solutions', className)}>
      <InterfacesSection analytics={analytics} />
      <Feature analytics={analytics} />
      <AutomationSection analytics={analytics} />
    </div>
  );
}
