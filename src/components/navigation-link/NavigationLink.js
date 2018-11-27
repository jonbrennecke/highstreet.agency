/* @flow */
import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  text: string,
  to: string,
  label: string,
  analytics: Analytics,
};

export default function NavigationLink({
  className,
  to,
  text,
  label,
  analytics,
}: Props) {
  return (
    <NavLink
      to={to}
      className={classnames('nav-link', className)}
      activeClassName="active"
      ariaCurrent="page"
      onClick={trackClick(analytics, label)}
    >
      {text}
    </NavLink>
  );
}

const trackClick = (analytics: Analytics, label: string): (() => void) => {
  return () => {
    analytics.trackEvent(`Navigation link click: ${label}`);
  };
};
