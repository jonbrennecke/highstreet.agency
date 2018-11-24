'use strict';

const path = require('path');
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const yaml = require('js-yaml');

const log = require('./log');
const webpackConfig = require('./webpack.config');
const webpackClientConfig = webpackConfig[1];

const yamlPath = path.resolve('app.yml');
const yamlConfig = yaml.load(fs.readFileSync(yamlPath, 'utf8'));
const app = express();
const compiler = webpack(webpackClientConfig);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackClientConfig.output.publicPath,
    stats: {
        colors: true
    },
    historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const serviceConfig = yamlConfig.web.dev;
const port = serviceConfig.port;
const host = serviceConfig.host;

app.listen(port, (err) => {
  if (err) {
    log.trace(err);
    log.error('Failed to start Development Server.');
    return;
  }
  log.info('Listening at http://' + host + ':' + port);
});
