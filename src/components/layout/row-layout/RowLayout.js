/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './RowLayout.styles.scss';

import type { Children } from '../../../types/react';

type Props = {
  children?: Children,
  className?: ?string,
};

export default function RowLayout({ children, className }: Props) {
  return <div className={classnames('row-layout', className)}>{children}</div>;
}
