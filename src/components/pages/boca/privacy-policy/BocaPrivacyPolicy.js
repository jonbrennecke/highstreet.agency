/* @flow */
import React, { Component } from 'react';

import * as Analytics from '../../../../utils/Analytics';
import { pageview } from '../../../../utils/AnalyticsUI';
import Footer from '../../../footer/Footer';
import BocaHeader from './BocaHeader';
import PrivacyPolicyBody from './PrivacyPolicyBody';
import { SEO_PAGE_TYPE } from '../../../../constants';
import Seo from '../../../seo/Seo';

type Props = {
  analytics: Analytics.Analytics,
};

// $FlowFixMe
import './BocaPrivacyPolicy.scss';

// $FlowFixMe
@pageview(
  Analytics.CategoryEnum.CaptionThisPrivacyPolicyPage,
  'BOCA - Privacy policy page view'
)
export default class BocaPrivacyPolicy extends Component<Props> {
  props: Props;

  render() {
    return (
      <main className="privacy-policy-page">
        <Seo
          pageType={SEO_PAGE_TYPE.WEBPAGE}
          title="High Street"
          description="High Street"
          url="https://highstreet.agency"
        />
        <BocaHeader
          className="home-page-header"
          analytics={this.props.analytics}
        />
        <PrivacyPolicyBody />
        <Footer analytics={this.props.analytics} />
      </main>
    );
  }
}
