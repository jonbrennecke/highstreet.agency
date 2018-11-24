// @flow
/* global PROJECT_ROOT */
import Helmet from 'react-helmet';
import { JSDOM } from 'jsdom';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Promise from 'bluebird';
import nodeFs from 'fs';
import path from 'path';
import Routes from './Routes';

// $FlowFixMe
import './index.scss';

const fs = Promise.promisifyAll(nodeFs);
// $FlowFixMe
const HTML_TEMPLATE_PATH = path.resolve(PROJECT_ROOT, 'public', 'index.html');

Promise.config({
  cancellation: true,
  warnings: {
    wForgottenReturn: false,
  },
});

const render = async () => {
  const reactDOM = renderToString(<Routes isBrowser={false} />);
  const htmlTemplate = await fs.readFileAsync(HTML_TEMPLATE_PATH, 'utf8');
  const dom = new JSDOM(htmlTemplate);
  await renderReactDOM(dom, reactDOM);
  await renderHead(dom);
  await fs.writeFileAsync(HTML_TEMPLATE_PATH, dom.serialize(), 'utf8');
};

const renderReactDOM = async (dom: JSDOM, reactDOM: string) => {
  const templateBody = dom.window.document.querySelector('main');
  templateBody.insertAdjacentHTML('afterbegin', reactDOM);
  return dom;
};

const renderHead = async (dom: JSDOM) => {
  const helmet = Helmet.renderStatic();
  const head = `
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}`;
  const templateHead = dom.window.document.querySelector('head');
  templateHead.insertAdjacentHTML('afterbegin', head);
  return dom;
};

(async (done: () => any) => {
  await render();
  done();
})(() => {
  // Noop
});
