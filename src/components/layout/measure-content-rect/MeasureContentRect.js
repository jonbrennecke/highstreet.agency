/* @flow */
import React, { Component } from 'react';
import { withContentRect } from 'react-measure';
import noop from 'lodash/noop';
import isEmpty from 'lodash/isEmpty';
import pick from 'lodash/pick';

import type { Element } from 'react';

const DEFAULT_CONTENT_RECT_ENTRY = { width: 0, height: 0, x: 0, y: 0 };

type ContentRectEntry = {
  width: number,
  height: number,
  x: number,
  y: number,
};

type ContentRect = {
  entry: ContentRectEntry,
};

type Props = {
  id?: string,
  className?: string,
  measureRef?: ?() => void,
  contentRect: ContentRect,
  render: ContentRectEntry => ?Element<*>,
};

type DefaultProps = { contentRect: ContentRect };
type State = {};

// $FlowFixMe
@withContentRect('bound')
export default class MeasureContentRect extends Component<Props, State> {
  props: Props;
  state: State;
  static defaultProps: DefaultProps = {
    measureRef: noop,
    contentRect: { entry: DEFAULT_CONTENT_RECT_ENTRY },
  };

  render() {
    const entry = pick(this.props.contentRect.entry, [
      'width',
      'height',
      'x',
      'y',
    ]);
    return (
      <div
        ref={this.props.measureRef}
        id={this.props.id}
        className={this.props.className}
      >
        {this.props.render(isEmpty(entry) ? DEFAULT_CONTENT_RECT_ENTRY : entry)}
      </div>
    );
  }
}
