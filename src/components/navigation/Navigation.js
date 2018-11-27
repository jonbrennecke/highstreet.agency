/* @flow */
import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

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
      <div className="nav-links">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/process" className="nav-link" activeClassName="active">
          Process
        </NavLink>
        <NavLink to="/work" className="nav-link" activeClassName="active">
          Work
        </NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active">
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}
