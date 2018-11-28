/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './Solutions.scss';

type Props = {
  className?: ?string,
};

export default function APISection({ className }: Props) {
  return (
    <section className={classnames('solutions-apis', className)}>
      <div className="description">
        <h5 className="uppercase-subtitle">SOLUTIONS</h5>
        <h1 className="uppercase-title">APIs</h1>
        <p>
          Accelerate your platform with API and back-end development designed to supercharge your growing startup.
        </p>
        <div className="line" />
      </div>
      <div className="figure">
        {/* <InterfacesFigure /> */}
      </div>
    </section>
  );
}
