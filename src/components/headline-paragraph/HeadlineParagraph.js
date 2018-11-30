/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './HeadlineParagraph.scss';

type Props = {
  className?: ?string,
  id?: ?string,
  text: string,
};

export default function HeadlineParagraph({ className, id, text }: Props) {
  return (
    <p id={id} className={classnames('headline-paragraph', className)}>
      {text}
    </p>
  );
}
