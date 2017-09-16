var config = require('../config');
var webpack = require('webpack');
var merge = require('webpack-merge');
var utils = require('./utils');
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entries = {
  app: './src/main.js',
};

// add hot-reload related code to entry chunks
Object.keys(entries).forEach(function (name) {
  entries[name] = ['./build/dev-client'].concat(entries[name])
});


module.exports = merge.strategy({
  entry: 'replace'
})(baseWebpackConfig, {
  entry: entries,
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks: ['app']
    }),
  ]
});
