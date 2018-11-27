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
      <NavLogo />
      <div className="nav-links">
        <NavigationLink
          text="Home"
          to="/"
          label="'Home' nav link"
          analytics={analytics}
        />
        <NavigationLink
          text="Process"
          to="/process"
          label="'Process' nav link"
          analytics={analytics}
        />
        <NavigationLink
          text="Work"
          to="/work"
          label="'Work' nav link"
          analytics={analytics}
        />
        <NavigationLink
          text="Contact"
          to="/contact"
          label="'Contact' nav link"
          analytics={analytics}
        />
      </div>
    </nav>
  );
}
