/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './HorizontallyCentered.styles.scss';

import type { Children } from '../../../types/react';

type Props = {
  className?: ?string,
  children?: Children,
  container?: React$ElementType,
};

export default function HorizontallyCentered({
  container,
  children,
  className,
}: Props) {
  const Container = container || 'div';
  return (
    <Container className={classnames('horizonally-centered', className)}>
      {children}
    </Container>
  );
}
