const path = require('path');
const fs = require('fs');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

// root path for this project
const ROOT = __dirname;

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
        output: {
            filename: '[name].bundle.js',
            path: path.join(ROOT, 'src'),
        },
    });