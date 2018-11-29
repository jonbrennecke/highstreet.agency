/* @flow */
import React from 'react';
import classnames from 'classnames';

import Checkmark from '../checkmark/Checkmark';

// $FlowFixMe
import './DevelopmentSolutionsList.scss';

type Props = {
  className?: ?string,
};

export default function DevelopmentSolutionsList({ className }: Props) {
  return (
    <ul className={classnames('dev-solutions-list', className)}>
      <li className="list-item">
        <Checkmark className="icon" />
        <span className="label">iOS Development</span>
      </li>
      <li className="list-item">
        <Checkmark className="icon" />
        <span className="label">Android Development</span>
      </li>
      <li className="list-item">
        <Checkmark className="icon" />
        <span className="label">Website Development</span>
      </li>
    </ul>
  );
}
