/* @flow */
import React, { Component } from 'react';

import * as Analytics from '../../../utils/Analytics';
import { pageview } from '../../../utils/AnalyticsUI';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import { SEO_PAGE_TYPE } from '../../../constants';
import ContentMaxWidth from '../../layout/content-max-width/ContentMaxWidth';
import Seo from '../../seo/Seo';

// $FlowFixMe
import './Process.scss';

type Props = {
  analytics: Analytics.Analytics,
};

// $FlowFixMe
@pageview(Analytics.CategoryEnum.ProcessPage, 'Process page view')
export default class Process extends Component<Props> {
  props: Props;

  render() {
    return (
      <main className="process-page">
        <Seo
          pageType={SEO_PAGE_TYPE.WEBPAGE}
          title="High Street - Our Process"
          description="High Street - Our Process"
          url="https://highstreet.agency"
        />
        <Header
          className="process-page-header"
          analytics={this.props.analytics}
          headlineText="Our Process"
          headlineParagraphText="We are currently re-thinking our website. Stay tuned!"
          callToAction={{ text: 'Work with us', pathName: '/contact' }}
        />
        <ContentMaxWidth className="process-page-body">
          {/* TODO */}
        </ContentMaxWidth>
        <Footer analytics={this.props.analytics} />
      </main>
    );
  }
}
