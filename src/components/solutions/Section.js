/* @flow */
import React from 'react';
import classnames from 'classnames';

import Button from '../button/Button';

// $FlowFixMe
import './Solutions.scss';

import type { Element } from 'react';
import type { Analytics } from '../../utils/Analytics';

type Props = {
  className?: ?string,
  analytics: Analytics,
  title: string,
  text: string,
  buttonText: string,
  name: string,
  renderFigure: () => Element<*>,
};

export default function Section({
  className,
  analytics,
  buttonText,
  title,
  name,
  text,
  renderFigure,
}: Props) {
  return (
    <section className={classnames('solutions-section', className)}>
      <div className="description">
        <h5 className="uppercase-subtitle">SOLUTIONS</h5>
        <h1 className="uppercase-title">{title}</h1>
        <p>{text}</p>
        <div className="line" />
        <Button
          className=""
          analytics={analytics}
          name={`Solutions: ${name} - call to action button`}
          text={buttonText}
          onClick={() => {
            // TODO
          }}
        />
      </div>
      <figure className="figure">{renderFigure()}</figure>
    </section>
  );
}
