/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import PhoneIcon from './icons/PhoneIcon';
import ServersIcon from './icons/ServersIcon';
import WebDevIcon from './icons/WebDevIcon';

// $FlowFixMe
import './Services.scss';

type Props = {
  className?: ?string,
};

export default function Services({ className }: Props) {
  return (
    <section className={classnames('services', className)}>
      <ContentMaxWidth className="services-container">
        <div className="section-title">
          <h1>Services</h1>
        </div>
        <ul className="services-list">
          <li className="services-list-item">
            <PhoneIcon className="services-list-item-icon" />
            <div className="services-list-item-text">
              <h3>Cross-platform mobile development</h3>
              <p>Engage new audiences with a world-class native experience.</p>
            </div>
          </li>
          <li className="services-list-item">
            <WebDevIcon className="services-list-item-icon" />
            <div className="services-list-item-text">
              <h3>Web development</h3>
              <p>
                Full-stack development for web platforms, marketting pages and
                everything in between.
              </p>
            </div>
          </li>
          <li className="services-list-item">
            <ServersIcon className="services-list-item-icon" />
            <div className="services-list-item-text">
              <h3>Deployment, automation and QA</h3>
              <p>
                Scale your team to new levels with continuous integration
                solutions designed just for your needs.
              </p>
            </div>
          </li>
        </ul>
      </ContentMaxWidth>
    </section>
  );
}
