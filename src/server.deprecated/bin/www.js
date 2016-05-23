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

module.exports = function(settings) {
  'use strict';
  const App = require('../modules/HttpServer')(settings);

  //const Routemap = require('../modules/HttpServer/Routemap')(App);
  //Routemap.loadRoute('root');

  const RootRoute = require('../routes/root');
  const ApiRoute = require('../routes/api');
  App.use('/', RootRoute);
  App.use('/api', ApiRoute);

  App.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers
  if (true) {
    App.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.json({
        'success': false,
        'error': err
      });
    });
  }


  App.startListening();
  
};


var path = require('path');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//
//var app = express();
//
//// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');
//
//// uncomment after placing your favicon in /public
////app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(require('node-sass-middleware')({
//  src: path.join(__dirname, 'public'),
//  dest: path.join(__dirname, 'public'),
//  indentedSyntax: true,
//  sourceMap: true
//}));
//app.use(express.static(path.join(__dirname, 'public')));
//
//app.use('/', routes);
//app.use('/users', users);
//
//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});
//
//
//module.exports = app;
