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

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENVIRONMENT = require('./environment');

// * Обнаруживаем корневую директорию проекта
//   (обнаруживаем достаточно по тупому методу, расово верный вариант — смотреть
//    в module.mainModule, либо подыматься на уровень верх до обнаружения
//    правильного, нашего package.json)
const rootPath = path.normalize(path.join(__dirname, '..'));

// * Общая для любых окружений конфигурация,
//   на которую затем будет "наложена" конфигурация окружения разработки, в случае
//   запуска сборщика на машине разработчика
// ! Для указания скрипту на то, что текущее окружение — не development, замените
//   значение в файле config/environment.js

const FOLDERS = {
  sourceRoot: path.join(rootPath, 'src', 'client'),
  compiledRoot: path.join(rootPath, 'build', 'public', 'assets'),

  publicRoot: '/'
};

const ENTRY_POINTS = {
  babel: 'babel-polyfill',
  app: path.join(FOLDERS.sourceRoot, 'index.js'),
};

const LOADERS = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
      "presets": [
        "es2015",
        "stage-0",
        "es2015-riot"
      ],
      "plugins": [
        'transform-runtime',
        ["transform-es2015-modules-commonjs", { "allowTopLevelThis": true }] ]
    }
  },
  {
    "test": /\.css?$/,
    "loader": "style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]"
  },
  {
    "test": /\.scss?$/,
    loaders: ['style', 'css', 'sass']
  },
  {
    "test": /\.handlebars?$/,
    "loader": "handlebars"
  }
];

let webpackConfig = {
  entry: ENTRY_POINTS,
  output: {
    path: FOLDERS.compiledRoot,
    filename: '[name].js',
    publicPath: FOLDERS.publicRoot
  },
  devtool: 'cheap-module-source-map',


  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(path.join(FOLDERS.sourceRoot, 'templates'), 'index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: LOADERS
  }
};

webpackConfig.__webpackConfigExtensions = [];

if(ENVIRONMENT === 'development') {
  let devConfig = require('./webpack.development');
  webpackConfig = webpackMerge(webpackConfig, devConfig);
  webpackConfig.__webpackConfigExtensions.push('devServer');
}

module.exports = webpackConfig;