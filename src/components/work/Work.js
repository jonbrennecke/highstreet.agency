/* @flow */
import React, { Component } from 'react';

import * as Analytics from '../../utils/Analytics';
import { pageview } from '../../utils/AnalyticsUI';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import { SEO_PAGE_TYPE } from '../../constants';
import Seo from '../seo/Seo';

// $FlowFixMe
import './Work.scss';

type Props = {
  analytics: Analytics.Analytics,
};

// $FlowFixMe
@pageview(Analytics.CategoryEnum.WorkPage, 'Work page view')
export default class Work extends Component<Props> {
  props: Props;

  render() {
    return (
      <main className="work-page">
        <Seo
          pageType={SEO_PAGE_TYPE.WEBPAGE}
          title="High Street - Our Work"
          description="High Street - Our Work"
          url="http://highstreet.agency"
        />
        <Header
          analytics={this.props.analytics}
          className="work-page-header"
          headlineText="Here's what we're working on"
          headlineParagraphText="We are currently re-thinking our website. Stay tuned!"
          callToActionText="Work with us"
        />
        <ContentMaxWidth className="process-page-body">
          {/* TODO */}
        </ContentMaxWidth>
        <Footer analytics={this.props.analytics} />
      </main>
    );
  }
}
