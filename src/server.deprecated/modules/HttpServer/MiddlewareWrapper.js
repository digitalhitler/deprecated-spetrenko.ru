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

const apiHttp = {
  Transaction:  require('../Http/Transaction'),
  Request:      require('../Http/Request'),
  Response:     require('../Http/Response'),
  Output:       require('../Http/Output'),
};

let wrappersArmed = false;

module.exports = function(App) {

  if(wrappersArmed === false) {
    App.use(function prerouteAction (req, res, next) {
      if (!req.apiHttp) req.apiHttp = {};
      req.apiHttp.Transaction = new apiHttp.Transaction(req);
      req.apiHttp.Request = req.apiHttp.Transaction.request;
      console.log(req.apiHttp);
      console.log('Request Type:', req.method);
      console.log('Next is');
      console.log(next);
      next();
    });
    wrappersArmed = true;
  }

  return true;
};