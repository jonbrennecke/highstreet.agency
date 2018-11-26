/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Headline.scss';

type Props = {
  className?: ?string,
  id?: ?string,
  text: string,
};

export default function Headline({ className, id, text }: Props) {
  return (
    <h1 id={id} className={classnames('headline', className)}>
      {text}
    </h1>
  );
}
