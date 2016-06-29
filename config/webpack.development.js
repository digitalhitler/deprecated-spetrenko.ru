/*
 * spetrenko.ru - my sweety personal pet-project sources
 * https://github.com/digitalhitler/spetrenko.ru
 *
 * Copyright © 1992-2016 Sergey Petrenko
 * This file may be the part of sp.ru source code.
 *
 * This software is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/. In either words, you can do anything except any kind of commercial purposes without a permission of author.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *  
 *  © Sergey Petrenko <spetrenko@me.com>
 */

'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = (function(webpackConfig) {
  const devConfig = {
   // devtool: 'source-map',
    //entry: {
    //  devServer: 'webpack/hot/only-dev-server'
    //},
    //module: {
    //  loaders: [
    //    {
    //      test: /\.js$/,
    //      loaders: ['react-hot', 'jsx'], // <-- changed line
    //      exclude: /node_modules/
    //    }
    //  ]
    //},
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,

      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: 'localhost',
      port: 3333,
      headers: { "Access-Control-Allow-Origin": "*" }
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new NpmInstallPlugin() // automatic dependency management
    ]
  };

  return webpackMerge(webpackConfig, devConfig);
}());
