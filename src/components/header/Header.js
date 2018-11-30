/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import CallToActionButton from '../call-to-action-button/CallToActionButton';
import Headline from '../headline/Headline';
import HeaderBackground from '../header-background/HeaderBackground';
import Navigation from '../navigation/Navigation';

// $FlowFixMe
import './Header.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
  headlineText: string,
};

export default function Header({ className, analytics, headlineText }: Props) {
  return (
    <header className={classnames('header', className)}>
      <HeaderBackground />
      <ContentMaxWidth className="header-inner">
        <Navigation analytics={analytics} />
        <Headline className="call-to-action" text={headlineText} />
        <CallToActionButton
          analytics={analytics}
          name="Hero call-to-action button"
          text="Work with us"
          onClick={() => {
            // TODO animate page transition to /contact
          }}
        />
      </ContentMaxWidth>
    </header>
  );
}
