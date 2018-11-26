/* @flow */
import React, { Component, Fragment } from 'react';

import * as Analytics from '../../utils/Analytics';
import { pageview } from '../../utils/AnalyticsUI';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { SEO_PAGE_TYPE } from '../../constants';
import Seo from '../seo/Seo';

// $FlowFixMe
import './Home.scss';

type Props = {
  analytics: Analytics.Analytics,
};

// $FlowFixMe
@pageview(Analytics.CategoryEnum.HomePage, 'Home page view')
export default class Home extends Component<Props, {}> {
  props: Props;
  state = {};

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
        <Header analytics={this.props.analytics} />
        <Footer />
      </Fragment>
    );
  }
}
