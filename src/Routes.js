/* @flow */
import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router';

import Home from './components/pages/home/Home';
import Contact from './components/pages/contact/Contact';
import Process from './components/pages/process/Process';
import Work from './components/pages/work/Work';

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
          <Route path="/contact" exact component={Contact} />
          <Route path="/process" exact component={Process} />
          <Route path="/work" exact component={Work} />
        </Fragment>
      </Route>
    </Router>
  );
}
