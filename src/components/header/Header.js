/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import NavLogo from '../nav-logo/NavLogo';
import Button from '../button/Button';

// $FlowFixMe
import './Header.scss';

import type { PageAnalytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: PageAnalytics,
};

export default function Header({ className, analytics }: Props) {
  return (
    <header className={classnames('header', className)}>
      <ContentMaxWidth className="logo-container">
        <NavLogo />
        <p className="call-to-action">
          We connect startups with mobile audiences
        </p>
        <Button
          analytics={analytics}
          className="call-to-action-button"
          name="Hero call-to-action button"
          text="Work with us"
          onClick={() => {
            // TODO
          }}
        />
      </ContentMaxWidth>
    </header>
  );
}
