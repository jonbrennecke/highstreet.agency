/* @flow */
import React from 'react';

import Head from '../head/Head';
import { SEO_PAGE_TYPE, THEME_COLORS } from '../../constants';

type Props = {
  pageType: typeof SEO_PAGE_TYPE.WEBPAGE | typeof SEO_PAGE_TYPE.ARTICLE,
  title: string,
  description: string,
  url: string,
};

export default function Seo({ pageType, title, description, url }: Props) {
  return (
    <Head
      schema={pageType}
      title={title}
      description={description}
      url={url}
      themeColor={THEME_COLORS.META_HEAD_COLOR}
    />
  );
}
