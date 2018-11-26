// @flow
import { createElement, Component } from 'react';

import * as Analytics from './Analytics';

type AnalyticsProps = { analytics: Analytics.Analytics };

export function pageview<Props, State>(
  category: $Values<typeof Analytics.CategoryEnum>,
  label: string
): (
  Class<Component<Props & AnalyticsProps, State>>
) => Class<Component<Props, State>> {
  return (
    WrappedComponent: Class<Component<Props & AnalyticsProps, State>>
  ): Class<Component<Props, State>> => {
    return class PageViewWrapper extends Component<Props, State> {
      analytics: Analytics.PageAnalytics = new Analytics.PageAnalytics(
        category
      );

      async componentDidMount() {
        await this.analytics.trackPageView(label);
      }

      render() {
        return createElement(WrappedComponent, {
          ...this.props,
          analytics: this.analytics,
        });
      }
    };
  };
}
