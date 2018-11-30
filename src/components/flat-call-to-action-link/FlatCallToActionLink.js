/* @flow */
import React from 'react';
import classnames from 'classnames';

import CallToActionLink from '../call-to-action-link/CallToActionLink';

// $FlowFixMe
import './FlatCallToActionLink.scss';

import type { Analytics } from '../../utils/Analytics';

type Props = {
  analytics: Analytics,
  className?: ?string,
  className?: ?string,
  id?: ?string,
  name: string,
  text: string,
  to: string,
  onClick?: () => void,
};

export default function FlatCallToActionLink({ className, ...etc }: Props) {
  return (
    <CallToActionLink
      className={classnames('flat-call-to-action-link', className)}
      {...etc}
    />
  );
}
