/*******************************************************************************
 * * Dudehunters local
 *
 * * Copyright © 1992-2016 Sergey Petrenko
 *   All Rights Reserved.
 *   This file is the part of "Dudehunters local" source code.
 *   Unauthorized copying of this file, via any medium is strictly prohibited.
 *   Proprietary and confidential.
 *
 * * Source code repository overview: 
 *   http://bitbucket.org/dudehunters/src
 *
 * * Author information:
 *   Sergey S Petrenko <spetrenko@me.com
 *   Mobile: +79052229963
 *   Address: Bol Pushkarskaya 58-7,
 *   Saint Petersburg, Russia, 192101.
 *
 * * File notes & history:
 *   5/18/16 10:12 AM
 *   First implemented. 
 ******************************************************************************/

'use strict';

const apiHttp = {
  Transaction:  require('../Http/Transaction'),
  Request:      require('../Http/Request'),
  Response:     require('../Http/Response'),
  Output:       require('../Http/Output'),
};

module.exports = function(App) {

  App.use(function prerouteAction(req, res, next) {
    if(!req.apiHttp) req.apiHttp = {};
    req.apiHttp.Transaction = new apiHttp.Transaction(req);
    req.apiHttp.Request = req.apiHttp.Transaction.request;
    console.log(req.apiHttp);
    console.log('Request Type:', req.method);
    console.log('Next is');
    console.log(next);
    next();
  });

  let Server = require('express');
  let Router = Server.Router();
  App.use(Router);
  console.log(Router);

  return Router;
};