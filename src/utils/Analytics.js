// @flow
import * as GoogleAnalytics from './GoogleAnalytics';

export const ActionEnum = GoogleAnalytics.ActionEnum;
export const CategoryEnum = GoogleAnalytics.CategoryEnum;

type ActionDetails = {
  action: $Values<typeof ActionEnum>,
  label: ?string,
  value?: ?number,
};

export interface Analytics {
  +trackAction: (event: ActionDetails) => Promise<void>;
  +trackPageView: (label: string, value?: ?number) => Promise<void>;
  +trackEvent: (label: string, value?: ?number) => Promise<void>;
}

export class PageAnalytics implements Analytics {
  category: $Values<typeof CategoryEnum>;

  constructor(category: $Values<typeof CategoryEnum>) {
    this.category = category;
  }

  async trackAction(details: ActionDetails) {
    await GoogleAnalytics.trackAction({
      category: this.category,
      action: details.action,
      label: details.label,
    });
  }

  async trackPageView(label: string, value?: ?number) {
    return await this.trackAction({
      action: ActionEnum.PageView,
      label,
      value,
    });
  }

  async trackEvent(label: string, value?: ?number) {
    return await this.trackAction({
      action: ActionEnum.Event,
      label,
      value,
    });
  }
}
