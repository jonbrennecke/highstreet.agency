/* @flow */
import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router';

import Home from './components/home-page/Home';

type Props = {
  isBrowser?: boolean,
};

export default function Routes({ isBrowser }: Props) {
  const Router = isBrowser
    ? BrowserRouter
    : // eslint-disable-next-line react/display-name
      ({ children }: any) => (
        <StaticRouter context={{}}>{children}</StaticRouter>
      );
  return (
    <Router>
      <Route path="/">
        <Fragment>
          <Route path="/" exact component={Home} />
        </Fragment>
      </Route>
    </Router>
  );
}
