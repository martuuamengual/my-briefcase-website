const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

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