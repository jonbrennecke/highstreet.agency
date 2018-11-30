/* @flow */
import React, { Component } from 'react';
import { autobind } from 'core-decorators';

import * as Analytics from '../../utils/Analytics';
import { pageview } from '../../utils/AnalyticsUI';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { SEO_PAGE_TYPE } from '../../constants';
import Seo from '../seo/Seo';
import ContactForm from '../contact-form/ContactForm';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import Alert from '../alert/Alert';

// $FlowFixMe
import './Contact.scss';

import type { ContactData } from '../contact-form/ContactForm';

type Props = {
  analytics: Analytics.Analytics,
};

type State = {
  isSuccessMessageVisible: boolean,
  isFailureMessageVisible: boolean,
};

const CLOUD_FUNCTION_URL =
  'https://us-central1-high-street-6a792.cloudfunctions.net/createContactFormRecord';

// $FlowFixMe
@pageview(Analytics.CategoryEnum.ContactPage, 'Contact page view')
@autobind
export default class Contact extends Component<Props, State> {
  props: Props;
  state = {
    isSuccessMessageVisible: false,
    isFailureMessageVisible: false,
  };

  async handleSubmitForm(data: ContactData) {
    try {
      const res = await fetch(CLOUD_FUNCTION_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          budget: data.budget,
          description: data.description,
          phoneNumber: data.phoneNumber,
        }),
      });
      if (res.status === 201) {
        this.displaySuccessMessage();
        return;
      }
      this.displayFailureMessage();
    } catch (error) {
      this.displayFailureMessage();
    }
  }

  displayFailureMessage() {
    this.setState({
      isSuccessMessageVisible: false,
      isFailureMessageVisible: true,
    });
    this.clearAlerts();
  }

  displaySuccessMessage() {
    this.setState({
      isSuccessMessageVisible: true,
      isFailureMessageVisible: false,
    });
    this.clearAlerts();
  }

  clearAlerts() {
    setTimeout(() => {
      this.setState({
        isSuccessMessageVisible: false,
        isFailureMessageVisible: false,
      });
    }, 2000);
  }

  render() {
    return (
      <main className="contact-page">
        <Seo
          pageType={SEO_PAGE_TYPE.WEBPAGE}
          title="High Street - Contact Us"
          description="High Street - Contact Us"
          url="http://highstreet.agency"
        />
        <Alert
          title="Thanks!"
          text="Your message has been sent."
          isVisible={this.state.isSuccessMessageVisible}
        />
        <Alert
          title="Sorry!"
          text="We were unable to send your message."
          isVisible={this.state.isFailureMessageVisible}
        />
        <Header
          className="contact-header"
          analytics={this.props.analytics}
          headlineText="Let's talk!"
          headlineParagraphText="We’d love to hear what you are working on. Drop us a note here and we’ll get back to you in 24 hours or less."
        />
        <ContentMaxWidth className="contact-page-body">
          <ContactForm
            analytics={this.props.analytics}
            onSubmit={this.handleSubmitForm}
          />
        </ContentMaxWidth>
        <Footer
          className="contact-page-footer"
          analytics={this.props.analytics}
        />
      </main>
    );
  }
}
