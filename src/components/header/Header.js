/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import CallToActionButton from '../call-to-action-button/CallToActionButton';
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
  callToActionText?: string,
};

export default function Header({
  className,
  analytics,
  headlineText,
  headlineParagraphText,
  callToActionText,
}: Props) {
  return (
    <header className={classnames('header', className)}>
      <ContentMaxWidth className="header-inner">
        <Navigation analytics={analytics} />
        <Headline className="call-to-action" text={headlineText} />
        {headlineParagraphText ? (
          <HeadlineParagraph text={headlineParagraphText} />
        ) : null}
        {callToActionText ? (
          <CallToActionButton
            analytics={analytics}
            name="Hero call-to-action button"
            text="Work with us"
            onClick={() => {
              // TODO animate page transition to /contact
            }}
          />
        ) : null}
      </ContentMaxWidth>
    </header>
  );
}
