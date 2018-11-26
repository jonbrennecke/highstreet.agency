/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Subtitle.scss';

type Props = {
  className?: ?string,
  id?: ?string,
  text: string,
};

export default function Subtitle({ className, id, text }: Props) {
  return (
    <h2 id={id} className={classnames('subtitle', className)}>
      {text}
    </h2>
  );
}
