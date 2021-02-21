const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const alias = require('./webpack.alias');
const { merge } = require('webpack-merge');


module.exports = merge(alias, {
  target: 'web', //we need this line because webpack 5 with webpack-web-server v3 has a bug with hot reload.
  entry: {
      main: "./src/index.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.sass'],
    modules: ['node_modules']
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html',
      }),
      new webpack.ProvidePlugin({
          "React": "react",
      }),
  ],
  module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: 'file-loader',
            }
        ]
    },
});