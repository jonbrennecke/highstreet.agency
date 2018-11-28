/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Solutions.scss';

type Props = {
  className?: ?string,
};

export default function APISection({ className }: Props) {
  return (
    <section className={classnames('solutions-apis', className)}>
      
    </section>
  );
}
