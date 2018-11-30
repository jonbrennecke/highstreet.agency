/* @flow */
import React from 'react';
import classnames from 'classnames';

import type { Children } from '../../types/react';
import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  children?: ?Children,
  href: string,
  label: string,
  analytics: Analytics,
};

export default function ExternalNavigationLink({
  className,
  href,
  label,
  analytics,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classnames('external-nav-link', className)}
      onClick={trackClick(analytics, label)}
    >
      {children}
    </a>
  );
}

const trackClick = (analytics: Analytics, label: string): (() => void) => {
  return () => {
    analytics.trackEvent(`External navigation link click: ${label}`);
  };
};
