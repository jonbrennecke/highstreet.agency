/* eslint-disable */
'use strict'

const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const yaml = require('js-yaml');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const packageData = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';
const isStaging = process.env.NODE_ENV === 'staging';
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const yamlPath = path.resolve('app.yml');
const yamlConfig = yaml.load(fs.readFileSync(yamlPath, 'utf8'));

const clientPlugins = _.compact([
    (isProduction || isStaging) && new CleanWebpackPlugin(['public']),
    new MiniCssExtractPlugin({
        filename: '[name]_[contenthash].css',
        chunkFilename: '[id]_[contenthash].css'
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'template.html'),
        chunks: ['index', 'vendor', 'hotLoader', 'common'],
        excludeChunks: [],
        chunksSortMode: 'dependency'
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.VERSION': JSON.stringify(packageData.version),
        PROJECT_ROOT: path.join('"', __dirname, '"'),
        CONFIG: JSON.stringify(yamlConfig),
    }),
    new DotenvPlugin({
        sample: './.env.example',
        path: _.findKey({
            './.env.development': isDev,
            './.env.production': isProduction,
            './.env.staging': isStaging
        })
    }),
    (isProduction || isStaging) && new UglifyJSPlugin({
        sourceMap: true
    }),
    isDev && new webpack.HotModuleReplacementPlugin()
]);

const serverPlugins = _.compact([
    (isProduction || isStaging) && new CleanWebpackPlugin(['public']),
    new MiniCssExtractPlugin({
        filename: '[name]_[contenthash].css',
        chunkFilename: '[id]_[contenthash].css'
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.VERSION': JSON.stringify(packageData.version),
        PROJECT_ROOT: path.join('"', __dirname, '"'),
        CONFIG: JSON.stringify(yamlConfig),
    }),
    new DotenvPlugin({
        sample: './.env.example',
        path: _.findKey({
            './.env.development': isDev,
            './.env.production': isProduction,
            './.env.staging': isStaging
        })
    }),
    (isProduction || isStaging) && new UglifyJSPlugin({
        sourceMap: true
    }),
]);

const optimization = {
    minimize: isProduction || isStaging
};

const webpackMode = (isProduction || isStaging) ? 'production' : 'development';

const aliases = {
    '~': path.resolve(__dirname, 'src'),
    'assets': path.resolve(__dirname, 'assets')
};

const resolve = {
    modules: [
        'node_modules',
        path.resolve(__dirname, './node_modules')
    ],
    extensions: ['.js', '.jsx', '.css', '.scss', '.ts', '.tsx'],
    alias: aliases
};

const publicPath = (isProduction || isStaging) ? '/' : '/public/';

const output = {
    publicPath,
    path: path.resolve('public'),
    filename: '[name].js', // TODO add contenthash
};

const clientRules = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: _.compact([ isDev && 'react-hot-loader', 'babel-loader'])
    },
    {
        test: /\.html$/,
        use: 'html-loader'
    },
    {
        test: /\.(jpg|png|ico|xml)$/,
        use: {
            loader: 'file-loader?name=[name].[ext]'
        }
    },
    {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: {
            loader: 'file-loader?name=[name].[ext]'
        }
    },
    {
        test: /google.*\.html$/,
        use: {
            loader: 'file-loader?name=[name].[ext]'
        }
    },
    {
        test: /\.(sa|sc|c)ss$/,
        use: [
            isDev ? 'style-loader' : {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath }
            },
            {
                loader: 'css-loader',
                options: {
                    minimize: true,
                    url: true
                }
            },
            'resolve-url-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
            // TODO: add autoprefixer
            // options: { plugins: () => [ autoprefixer()] },
        ]
    },
    {
        test: /(\.svg)$/,
        use: {
            loader: 'svg-inline-loader'
        }
    }
];

const serverRules = clientRules;

const client = {
    devServer: {
        noInfo: true,
    },
    mode: webpackMode,
    target: 'web',
    entry: _.extend({
        index: './src/index.js',
        vendor: [
            'react',
            'react-dom'
		]
    },
    isDev && {
        hotLoader: 'webpack-hot-middleware/client'
    }),
    context: __dirname,
    devtool: 'source-map',
    node: {
        __filename: true,
        __dirname: true,
        fs: 'empty'
    },
    output,
    resolve,
    module: {
        rules: clientRules
    },
    plugins: clientPlugins,
    optimization
};

const server = {
    devServer: {
        noInfo: true,
    },
    mode: webpackMode,
    target: 'node',
    entry: {
        server: './src/server.js',
    },
    externals: nodeExternals(),
    context: __dirname,
    devtool: 'source-map',
    output,
    resolve,
    module: {
        rules: serverRules
    },
    plugins: serverPlugins,
    optimization
};

module.exports = [
    server,
    client
];