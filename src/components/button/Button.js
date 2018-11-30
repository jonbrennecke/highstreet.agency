/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Button.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  analytics: Analytics,
  className?: ?string,
  id?: ?string,
  name: string,
  text: string,
  type?: 'submit' | 'button',
  onClick: () => void,
};

export default function Button({
  analytics,
  className,
  id,
  name,
  text,
  onClick,
  type,
}: Props) {
  return (
    <button
      type={type || 'button'}
      id={id}
      className={classnames('button', className)}
      name={name}
      onClick={trackClick(analytics, name, onClick)}
    >
      {text}
    </button>
  );
}

const trackClick = (
  analytics: Analytics,
  label: string,
  callback: () => void
): (() => void) => {
  return () => {
    Promise.resolve(analytics.trackEvent(`Button click: ${label}`)).then(
      callback
    );
  };
};
