const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const alias = require('./webpack.alias');
const { merge } = require('webpack-merge');

const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");


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
      new CopyPlugin({
        patterns: [
            { from: "./public", to: "public" },
            { from: "./src/robots.txt", to: "robots.txt" },
        ],
      }),
      new CompressionPlugin({
          minRatio: 1 // this means that all files gziped that are less in byte than current file is compressed.
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
                test: /\.jpg$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'dist',
                        },
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            outputPath: 'images',
                        },
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            }
        ]
    },
});