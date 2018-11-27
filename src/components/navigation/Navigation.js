/* @flow */
import React from 'react';
import classnames from 'classnames';

import NavLogo from '../nav-logo/NavLogo';

// $FlowFixMe
import './Navigation.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function Navigation({ className, analytics }: Props) {
  return (
    <nav className={classnames('navigation', className)}>
      <NavLogo />
    </nav>
  );
}
