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

const logger            = require('debug');
logger.enable('*,-babel');
const debug            = require('debug')('sp.ru:webpack');
const currentEnv       = require('./config/environment');
const currentMode      = process.argv[2] || (currentEnv === 'development' ? 'watch' : 'build');
const webpackValidator = require('webpack-validator');

debug(`Running webpack on ${currentEnv} environment in ${currentMode} mode.`);

let webpackConfig    = require('./config/webpack');

if(webpackConfig.__webpackConfigExtensions instanceof Array) {
  debug('Config loaded & extended with: ' + webpackConfig.__webpackConfigExtensions.join(', '));
  delete webpackConfig.__webpackConfigExtensions;
} else {
  debug('Config loaded successfully.');
}

debug(`Validating config & applying it if everything is good...`);
webpackConfig = webpackValidator(webpackConfig);

module.exports = webpackConfig;
