/* @flow */
import React from 'react';
import classnames from 'classnames';

import Button from '../button/Button';

// $FlowFixMe
import './CallToActionButton.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  analytics: Analytics,
  className?: ?string,
  id?: ?string,
  name: string,
  text: string,
  onClick: () => void,
};

export default function CallToActionButton({ className, ...etc }: Props) {
  return (
    <Button
      className={classnames('call-to-action-button', className)}
      {...etc}
    />
  );
}
