/* @flow */
import React, { Component } from 'react';

import * as Analytics from '../../utils/Analytics';
import { pageview } from '../../utils/AnalyticsUI';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { SEO_PAGE_TYPE } from '../../constants';
import Seo from '../seo/Seo';

// $FlowFixMe
import './Contact.scss';

type Props = {
  analytics: Analytics.Analytics,
};

// $FlowFixMe
@pageview(Analytics.CategoryEnum.ContactPage, 'Contact page view')
export default class Contact extends Component<Props> {
  props: Props;

  render() {
    return (
      <main className="contact-page">
        <Seo
          pageType={SEO_PAGE_TYPE.WEBPAGE}
          title="High Street - Contact Us"
          description="High Street - Contact Us"
          url="http://highstreet.agency"
        />
        <Header
          className="contact-header"
          analytics={this.props.analytics}
          headlineText="Let's talk!"
          headlineParagraphText="We’d love to hear what you are working on. Drop us a note here and we’ll get back to you within 24 hours."
        />
        <Footer analytics={this.props.analytics} />
      </main>
    );
  }
}
