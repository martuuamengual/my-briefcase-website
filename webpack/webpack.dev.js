const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

// root path for this project
const ROOT = path.join(__dirname, '../');

/* TODO: MAKE IN FUTURE ENV VARIABLES IF NEEDED */
/*
const webpack = require('webpack');
var dotenvDev = require('dotenv').config({path: path.join(ROOT, '.env.dev')});
var dotenvCommon = require('dotenv').config({path: path.join(ROOT, '.env.common')});

var env = require('./webpack.helper').merge(dotenvCommon.parsed, dotenvDev.parsed);
*/

/*plugins: [
    new webpack.DefinePlugin({
        'process.env': JSON.stringify(env)
    })
],*/

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
        performance: {
            hints: 'warning',
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        output: {
            filename: 'js/[name].bundle.js',
            path: path.join(ROOT, 'src'),
            publicPath: '/',
        },
    });