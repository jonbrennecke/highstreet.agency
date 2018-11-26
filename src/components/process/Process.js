/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Process.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
};

export default function Process({ className, analytics }: Props) {
  return (
    <section className={classnames('process', className)}>
     
    </section>
  );
}
