/* @flow */
import React, { Component, Fragment } from 'react';

import * as Analytics from '../../utils/Analytics';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { SEO_PAGE_TYPE } from '../../constants';
import Seo from '../seo/Seo';

// $FlowFixMe
import './Home.scss';

// $FlowFixMe
export default class Home extends Component<Props, {}> {
  props: Props;
  state = {};
  pageAnalytics: Analytics.PageAnalytics = new Analytics.PageAnalytics(
    Analytics.CategoryEnum.HomePage
  );

  // TODO wrap this in a decorator
  async componentDidMount() {
    await this.pageAnalytics.trackPageView('Home Page View');
  }

  render() {
    return (
      <Fragment>
        <Seo
          pageType={SEO_PAGE_TYPE.WEBPAGE}
          title="High Street"
          description="High Street"
          url="http://highstreet.agency"
        />
        {/* <Layout>
        </Layout> */}
        <Header analytics={this.pageAnalytics} />
        <Footer />
      </Fragment>
    );
  }
}
