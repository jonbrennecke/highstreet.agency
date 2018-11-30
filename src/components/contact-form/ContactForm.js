/* @flow */
import React, { Component } from 'react';
import classnames from 'classnames';

import FlatCallToActionButton from '../flat-call-to-action-button/FlatCallToActionButton';
import RowLayout from '../layout/row-layout/RowLayout';

// $FlowFixMe
import './ContactForm.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  analytics: Analytics,
  className?: ?string,
  id?: ?string,
  onSubmit: () => void,
};

type State = {
  fullName: string,
  email: string,
  phoneNumber: string,
  budget: string,
  description: string,
};

export default class ContactForm extends Component<Props, State> {
  state = {
    fullName: '',
    email: '',
    phoneNumber: '',
    budget: '',
    description: '',
  };

  render() {
    return (
      <form className={classnames('contact-form', this.props.className)}>
        <RowLayout className="contact-form-row">
          <div className="form-input-container">
            <input
              value={this.state.fullName}
              onChange={e => this.setState({ fullName: e.target.value })}
              type="input"
              name="fullName"
              id="fullName"
              required
              className="form-input required"
            />
            <label htmlFor="fullName">Your Name</label>
          </div>
          <div className="form-input-container">
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              type="email"
              name="email"
              id="email"
              required
              className="form-input required"
            />
            <label htmlFor="email">Email Address</label>
          </div>
        </RowLayout>
        <RowLayout className="contact-form-row">
          <div className="form-input-container">
            <input
              value={this.state.phoneNumber}
              onChange={e => this.setState({ phoneNumber: e.target.value })}
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              required
              className="form-input required"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
          </div>
          <div className="form-input-container">
            <input
              value={this.state.budget}
              onChange={e => this.setState({ budget: e.target.value })}
              type="text"
              name="budget"
              id="budget"
              required
              className="form-input required"
            />
            <label htmlFor="budget">Your Budget</label>
          </div>
        </RowLayout>
        <div className="form-input-container contact-form-row full-width">
          <input
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            name="description"
            id="description"
            required
            className="form-input required"
          />
          <label htmlFor="description">Describe your project</label>
        </div>
        <FlatCallToActionButton
          className="submit-button"
          name="contact-form-submit-button"
          text="Send"
          analytics={this.props.analytics}
          onClick={() => {
            this.props.onSubmit();
          }}
        />
        <p className="email-paragraph">
          Or send us an email at{' '}
          <a
            target="_blank"
            href="mailto:info@highstreet.agency"
            rel="noopener noreferrer"
          >
            info@highstreet.agency
          </a>
        </p>
      </form>
    );
  }
}
