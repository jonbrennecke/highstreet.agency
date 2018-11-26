/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';

// $FlowFixMe
import './Footer.scss';

type Props = {
  className?: ?string,
};

export default function Footer({ className }: Props) {
  return (
    <footer className={classnames('footer', className)}>
      <div className="footer-contents-wrap">
        <ContentMaxWidth className="footer-contents" />
      </div>
    </footer>
  );
}
