/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';

// $FlowFixMe
import './Header.scss';

type Props = {
  className?: ?string,
};

export default function Header({ className }: Props) {
  return (
    <header className={classnames('header', className)}>
      <ContentMaxWidth className="logo-container">
        {/* TODO */}
      </ContentMaxWidth>
    </header>
  );
}