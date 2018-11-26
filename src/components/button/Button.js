/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Button.scss';

import type { PageAnalytics } from '../../utils/Analytics';

type Props = {
  analytics: PageAnalytics,
  className?: ?string,
  id?: ?string,
  name: string,
  text: string,
  onClick: () => void,
};

export default function Button({
  analytics,
  className,
  id,
  name,
  text,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      id={id}
      className={classnames('button', className)}
      name={name}
      onClick={trackClick(analytics, name, onClick)}
    >
      {text}
    </button>
  );
}

async function trackClick(
  analytics: PageAnalytics,
  label: string,
  callback: () => void
) {
  await analytics.trackEvent(`Button Click: ${label}`);
  callback();
}
