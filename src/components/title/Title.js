/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Title.scss';

type Props = {
  className?: ?string,
  id?: ?string,
  text: string,
};

export default function Title({ className, id, text }: Props) {
  return (
    <h1 id={id} className={classnames('title', className)}>
      {text}
    </h1>
  );
}
