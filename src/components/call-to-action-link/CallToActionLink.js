/* @flow */
import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import noop from 'lodash/noop';

// $FlowFixMe
import './CallToActionLink.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  analytics: Analytics,
  className?: ?string,
  id?: ?string,
  name: string,
  text: string,
  to: string,
  onClick?: () => void,
};

export default function CallToActionLink({
  className,
  id,
  analytics,
  name,
  text,
  to,
  onClick,
}: Props) {
  return (
    <NavLink
      to={to}
      exact
      className={classnames('call-to-action-link', className)}
      id={id}
      activeClassName="active"
      ariaCurrent="page"
      onClick={trackClick(analytics, name, onClick || noop)}
    >
      {text}
    </NavLink>
  );
}

const trackClick = (
  analytics: Analytics,
  label: string,
  callback: () => void
): (() => void) => {
  return () => {
    Promise.resolve(analytics.trackEvent(`Link click: ${label}`)).then(
      callback
    );
  };
};
