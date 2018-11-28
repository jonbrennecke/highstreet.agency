/* @flow */
import React from 'react';
import classnames from 'classnames';

import InterfacesSection from './InterfacesSection';
import APIsSection from './APIsSection';

type Props = {
  className?: ?string,
};

export default function Solutions({ className }: Props) {
  return (
    <div className={classnames('solutions', className)}>
      <InterfacesSection className="solutions-section" />
      <APIsSection className="solutions-section" />
    </div>
  );
}
