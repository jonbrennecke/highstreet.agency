/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import NavLogo from '../nav-logo/NavLogo';
import Button from '../button/Button';
import Headline from '../headline/Headline';

// $FlowFixMe
import './Header.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function Header({ className, analytics }: Props) {
  return (
    <header className={classnames('header', className)}>
      <ContentMaxWidth className="logo-container">
        <NavLogo />
        <Headline
          className="call-to-action"
          text="We connect startups with mobile audiences"
        />
        <Button
          analytics={analytics}
          className="call-to-action-button"
          name="Hero call-to-action button"
          text="Work with us"
          onClick={() => {
            // TODO animate page transition to /projects
          }}
        />
      </ContentMaxWidth>
    </header>
  );
}
