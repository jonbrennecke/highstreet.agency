/* @flow */
import React from 'react';
import classnames from 'classnames';

import InterfacesArtwork from './InterfacesFigure';

// $FlowFixMe
import './Solutions.scss';

type Props = {
  className?: ?string,
};

export default function InterfacesSection({ className }: Props) {
  return (
    <section className={classnames('interfaces', className)}>
      <div className="description">
        <h5 className="uppercase-subtitle">SOLUTIONS</h5>
        <h1 className="uppercase-title">INTERFACES</h1>
        <p>
          We help you reach new audiences with software development for platforms like iOS,
          Android and web.
        </p>
        <div className="line" />
      </div>
      <div className="figure">
        <InterfacesArtwork />
      </div>
    </section>
  );
}
