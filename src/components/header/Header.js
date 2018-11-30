/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import CallToActionLink from '../call-to-action-link/CallToActionLink';
import Headline from '../headline/Headline';
import Navigation from '../navigation/Navigation';
import HeadlineParagraph from '../headline-paragraph/HeadlineParagraph';

// $FlowFixMe
import './Header.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
  headlineText: string,
  headlineParagraphText?: string,
  callToAction?: { text: string, pathName: string },
};

export default function Header({
  className,
  analytics,
  headlineText,
  headlineParagraphText,
  callToAction,
}: Props) {
  return (
    <header className={classnames('header', className)}>
      <ContentMaxWidth className="header-inner">
        <Navigation analytics={analytics} />
        <Headline className="call-to-action" text={headlineText} />
        {headlineParagraphText ? (
          <HeadlineParagraph text={headlineParagraphText} />
        ) : null}
        {callToAction ? (
          <CallToActionLink
            analytics={analytics}
            name="Hero call-to-action link"
            text={callToAction.text}
            to={callToAction.pathName}
          />
        ) : null}
      </ContentMaxWidth>
    </header>
  );
}
