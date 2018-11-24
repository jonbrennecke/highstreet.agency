/* @flow */
import React from 'react';

// $FlowFixMe
import './ContentMinWidth.styles.scss';

import type { Children } from '../../../types/react';

type Props = {
  children?: Children,
};

export default function ContentMinWidth({ children }: Props) {
  return <div className="content-min-width">{children}</div>;
}
