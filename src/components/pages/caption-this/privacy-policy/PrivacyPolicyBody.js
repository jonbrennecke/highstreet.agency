/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../../../layout/content-max-width/ContentMaxWidth';

type Props = {
  className?: ?string,
};

export default function Body({ className }: Props) {
  return (
    <section className={classnames('body-subsection process', className)}>
      <ContentMaxWidth className="process-inner">
        
      </ContentMaxWidth>
    </section>
  );
}
