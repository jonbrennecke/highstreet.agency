/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './ColumnLayout.styles.scss';

import type { Children } from '../../../types/react';

type Props = {
  id?: string,
  className?: string,
  children?: Children,
};

export default function ColumnLayout({ id, className, children }: Props) {
  return (
    <div id={id} className={classnames(className, 'column-layout')}>
      {children}
    </div>
  );
}
