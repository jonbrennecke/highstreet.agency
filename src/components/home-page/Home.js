/* @flow */
import React, { Component } from 'react';

import * as Analytics from '../../utils/Analytics';
import { pageview } from '../../utils/AnalyticsUI';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Body from '../body/Body';
import HeaderBackground from '../header-background/HeaderBackground';
import { SEO_PAGE_TYPE } from '../../constants';
import Seo from '../seo/Seo';

type Props = {
  analytics: Analytics.Analytics,
};

// $FlowFixMe
import './Home.scss';

// $FlowFixMe
@pageview(Analytics.CategoryEnum.HomePage, 'Home page view')
export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <main className="home-page">
        <Seo
          pageType={SEO_PAGE_TYPE.WEBPAGE}
          title="High Street"
          description="High Street"
          url="http://highstreet.agency"
        />
        <HeaderBackground />
        <Header
          analytics={this.props.analytics}
          headlineText="We create innovative digital products"
          callToAction={{ text: 'Work with us', pathName: '/contact' }}
        />
        <Body analytics={this.props.analytics} />
        <Footer analytics={this.props.analytics} />
      </main>
    );
  }
}
