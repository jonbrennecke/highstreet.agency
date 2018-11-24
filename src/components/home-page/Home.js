/* @flow */
import React, { Component } from 'react';

import * as GoogleAnalytics from '../../utils/GoogleAnalytics';
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

  async componentDidMount() {
    await GoogleAnalytics.trackEvent({
      category: GoogleAnalytics.CategoryEnum.HomePage,
      action: GoogleAnalytics.ActionEnum.PageView,
      label: 'Home Page View',
    });
  }

  render() {
    return (
      <div className="app-container homepage">
        <Seo
          pageType={SEO_PAGE_TYPE.WEBPAGE}
          title="Jon Brennecke"
          description="Jon Brennecke"
          url="http://jonbrennecke.com"
        />
        <Header />
        <Footer />
      </div>
    );
  }
}
