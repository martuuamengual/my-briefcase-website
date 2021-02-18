const path = require('path');
const fs = require('fs');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

// root path for this project
const ROOT = path.join(__dirname, '../');


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
                'process.env': JSON.stringify(dotenv.parsed)
            }),
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.join(ROOT, 'src'),
        },
    });