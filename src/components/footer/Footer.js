/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import FooterBackground from '../footer-background/FooterBackground';
import NavLogo from '../nav-logo/NavLogo';
import ColumnLayout from '../layout/column-layout/ColumnLayout';
import RowLayout from '../layout/row-layout/RowLayout';
import NavigationLink from '../navigation-link/NavigationLink';

// $FlowFixMe
import './Footer.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function Footer({ className, analytics }: Props) {
  return (
    <footer className={classnames('footer', className)}>
      <FooterBackground className="footer-background" />
      <ContentMaxWidth className="footer-contents">
        <RowLayout>
          <div className="footer-column-container">
            <ColumnLayout className="footer-column">
              <NavLogo />
            </ColumnLayout>
          </div>
          <div className="footer-column-container">
            <ColumnLayout className="footer-column">
              <h3 className="column-label">Explore</h3>
              <NavigationLink
                className="footer-nav-link"
                text="Home"
                to="/"
                label="'Home' nav link"
                analytics={analytics}
              />
              <NavigationLink
                className="footer-nav-link"
                text="Process"
                to="/process"
                label="'Process' nav link"
                analytics={analytics}
              />
              <NavigationLink
                className="footer-nav-link"
                text="Work"
                to="/work"
                label="'Work' nav link"
                analytics={analytics}
              />
              <NavigationLink
                className="footer-nav-link"
                text="Contact"
                to="/contact"
                label="'Contact' nav link"
                analytics={analytics}
              />
            </ColumnLayout>
          </div>
          <div className="footer-column-container">
            <ColumnLayout className="footer-column">
              <h3 className="column-label">Connect</h3>
              <NavigationLink
                className="footer-nav-link"
                text="Instagram"
                to="/"
                label="'Instagram' external nav link"
                analytics={analytics}
              />
              <NavigationLink
                className="footer-nav-link"
                text="LinkedIn"
                to="/"
                label="'LinkedIn' external nav link"
                analytics={analytics}
              />
              <NavigationLink
                className="footer-nav-link"
                text="Email"
                to="mailto:info@highstreet.com"
                label=""
                analytics={analytics}
              />
            </ColumnLayout>
          </div>
        </RowLayout>
        <RowLayout className="copyright-row">
          <p className="copyright-row-item copyright-text">
            © 2018 - High Street. All Rights Reserved.
          </p>
          <p className="copyright-row-item github-text">
            High Street is open source on{' '}
            <a
              target="_blank"
              href="https://github.com/jonbrennecke/highstreet.agency"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p className="copyright-row-item location-text">
            {"Made with ❤ in Coeur d'Alene, Idaho"}
          </p>
        </RowLayout>
      </ContentMaxWidth>
    </footer>
  );
}
