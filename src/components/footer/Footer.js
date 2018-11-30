/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import FooterBackground from '../footer-background/FooterBackground';
import NavLogo from '../nav-logo/NavLogo';
import ColumnLayout from '../layout/column-layout/ColumnLayout';
import RowLayout from '../layout/row-layout/RowLayout';
import NavigationLink from '../navigation-link/NavigationLink';
import ExternalNavigationLink from '../external-navigation-link/ExternalNavigationLink';

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
              <NavigationLink
                className="footer-nav-link"
                to="/"
                label="'Home' nav link"
                analytics={analytics}
              >
                <NavLogo />
              </NavigationLink>
            </ColumnLayout>
          </div>
          <div className="footer-column-container">
            <ColumnLayout className="footer-column">
              <h3 className="column-label">Explore</h3>
              <NavigationLink
                className="footer-nav-link"
                to="/"
                label="'Home' nav link"
                analytics={analytics}
              >
                Home
              </NavigationLink>
              <NavigationLink
                className="footer-nav-link"
                to="/process"
                label="'Process' nav link"
                analytics={analytics}
              >
                Process
              </NavigationLink>
              <NavigationLink
                className="footer-nav-link"
                to="/work"
                label="'Work' nav link"
                analytics={analytics}
              >
                Work
              </NavigationLink>
              <NavigationLink
                className="footer-nav-link"
                to="/contact"
                label="'Contact' nav link"
                analytics={analytics}
              >
                Contact
              </NavigationLink>
            </ColumnLayout>
          </div>
          <div className="footer-column-container">
            <ColumnLayout className="footer-column">
              <h3 className="column-label">Connect</h3>
              <ExternalNavigationLink
                className="footer-nav-link"
                href="https://instagram.com/jonbrennecke.dev"
                label="'Instagram' external nav link"
                analytics={analytics}
              >
                Instagram
              </ExternalNavigationLink>
              <ExternalNavigationLink
                className="footer-nav-link"
                href="https://www.linkedin.com/in/jonbrennecke"
                label="'LinkedIn' external nav link"
                analytics={analytics}
              >
                LinkedIn
              </ExternalNavigationLink>
              <ExternalNavigationLink
                className="footer-nav-link"
                href="mailto:info@highstreet.com"
                label="mailto link to info@highstreet.com"
                analytics={analytics}
              >
                Email
              </ExternalNavigationLink>
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
