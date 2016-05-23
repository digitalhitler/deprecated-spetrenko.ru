/* @flow weak */
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

const logger = require('debug');
logger.enable('sp.ru:*');

const debug = require('debug')('sp.ru:httpserver');

const findInstance = () => {
  if(typeof global.__appInstance === 'object') return global.__appInstance;
  else return false;
};

module.exports = function(settings) {

  if(!findInstance()) {

    debug(`Starting HttpServer instance`);
    const Server = require('express');
    const App = Server();
    require('./HttpServer/MiddlewareWrapper')(App);

    if(settings.mode && settings.mode === 'watch') {
      require('./HttpServer/Watch')(App);
      debug (`Watch mode middlewares enabled.`);
    }
` `

    //
    //App.get('/api/v1/', (req, res, next) => {
    //  console.log('the response will be sent by the next function ...');
    //  next();
    //}, (req, res) => {
    //  res.send('Hello from D!');
    //  res.end();
    //});
    //
    //App.get('/', (req, res) => {
    //  res.send('iam here');
    //  res.end('Lalalal');
    //});

    App.startListening = function() {
      let listenOn = settings.port || 5555;
      debug(`Listening for incoming connections on port ${listenOn}.`);
      App.listen(listenOn);
    };

    App.log = debug;

    return App;
  } else {
    debug(`Another instance of HttpServer that already listening has been found in global scope.`);
    return findInstance();
  }

};