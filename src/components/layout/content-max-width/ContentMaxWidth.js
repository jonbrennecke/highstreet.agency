/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './ContentMaxWidth.styles.scss';

import type { Children } from '../../../types/react';

type Props = {
  className?: ?string,
  children?: Children,
};

export default function ContentMaxWidth({ children, className }: Props) {
  return (
    <div className={classnames('content-max-width', className)}>{children}</div>
  );
}
