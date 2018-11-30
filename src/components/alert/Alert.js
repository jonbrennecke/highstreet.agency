/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Alert.scss';

type Props = {
  containerClassName?: ?string,
  alertClassName?: ?string,
  title: string,
  text: string,
  isVisible: boolean,
};

export default function Alert({
  containerClassName,
  alertClassName,
  isVisible,
  title,
  text,
}: Props) {
  return (
    <div
      className={classnames(
        'alert-container',
        containerClassName,
        isVisible && 'visible'
      )}
    >
      <div className={classnames('alert', alertClassName)}>
        <h1 className="alert-title">{title}</h1>
        <p className="alert-text">{text}</p>
      </div>
    </div>
  );
}
