/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import FooterBackground from '../footer-background/FooterBackground';
import NavLogo from '../nav-logo/NavLogo';

// $FlowFixMe
import './Footer.scss';

type Props = {
  className?: ?string,
};

export default function Footer({ className }: Props) {
  return (
    <footer className={classnames('footer', className)}>
      <FooterBackground className="footer-background" />
      <ContentMaxWidth className="footer-contents">
        <NavLogo/>
      </ContentMaxWidth>
    </footer>
  );
}
