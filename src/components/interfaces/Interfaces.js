/* @flow */
import React from 'react';
import classnames from 'classnames';

import InterfacesArtwork from '../interfaces-icon/InterfacesIcon';

// $FlowFixMe
import './Interfaces.scss';

type Props = {
  className?: ?string,
};

export default function Interfaces({ className }: Props) {
  return (
    <section className={classnames('interfaces', className)}>
      <div className="description">
        <h1>INTERFACES</h1>
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
