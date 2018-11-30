/* @flow */
import React from 'react';
import classnames from 'classnames';

import NavLogo from '../nav-logo/NavLogo';
import NavigationLink from '../navigation-link/NavigationLink';

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
      <NavigationLink
          className="logo"
          to="/"
          label="'Home' logo link"
          analytics={analytics}
        >
        <NavLogo />
      </NavigationLink>
      <div className="nav-links">
        <NavigationLink
          to="/"
          label="'Home' nav link"
          analytics={analytics}
        >
          Home
        </NavigationLink>
        <NavigationLink
          to="/process"
          label="'Process' nav link"
          analytics={analytics}
        >
          Process
        </NavigationLink>
        <NavigationLink
          to="/work"
          label="'Work' nav link"
          analytics={analytics}
        >
          Work
        </NavigationLink>
        <NavigationLink
          to="/contact"
          label="'Contact' nav link"
          analytics={analytics}
        >
          Contact
        </NavigationLink>
      </div>
    </nav>
  );
}
