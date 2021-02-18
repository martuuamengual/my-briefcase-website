const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

// root path for this project
const ROOT = path.join(__dirname, '../');

var dotenvDev = require('dotenv').config({path: path.join(ROOT, '.env.dev')});
var dotenvCommon = require('dotenv').config({path: path.join(ROOT, '.env.common')});

var env = require('./webpack.helper').merge(dotenvCommon.parsed, dotenvDev.parsed);

module.exports = merge(common,
    {
        mode: 'development',
        devServer: {
            inline: true,
            contentBase: path.join(ROOT, 'src'),
            hot: true,
            open: true,
            historyApiFallback: true,
            port: 3000,
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(env)
            }),
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.join(ROOT, 'src'),
        },
    });