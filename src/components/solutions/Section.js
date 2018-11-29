/* @flow */
import React, { Fragment } from 'react';
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
  isReversed?: boolean,
  renderFigure: () => Element<*>,
};

export default function Section({
  className,
  analytics,
  buttonText,
  title,
  name,
  text,
  isReversed,
  renderFigure,
}: Props) {
  const Description = () => (
    <div className="section-side description">
      <h5 className="subtitle uppercase">SOLUTIONS</h5>
      <h1 className="title uppercase">{title}</h1>
      <p className="paragraph">{text}</p>
      <div className="line" />
      <Button
        className="text-button"
        analytics={analytics}
        name={`Solutions: ${name} - call to action button`}
        text={buttonText}
        onClick={() => {
          // TODO
        }}
      />
    </div>
  );
  const Figure = () => <figure className="section-side figure">{renderFigure()}</figure>;
  return (
    <section
      className={classnames(
        'solutions-section',
        isReversed && 'reversed',
        className
      )}
    >
      {isReversed ? (
        <Fragment>
          <Figure />
          <Description />
        </Fragment>
      ) : (
        <Fragment>
          <Description />
          <Figure />
        </Fragment>
      )}
    </section>
  );
}
