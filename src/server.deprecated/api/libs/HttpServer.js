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
 *   5/18/16 7:26 AM
 *   First implemented. 
 ******************************************************************************/

'use strict';

function findInstance() {
  if(typeof global.__appInstance === 'object') return global.__appInstance;
  else return false;
};

module.exports = (function() {

  if(!findInstance()) {

    const Use = require('./Use.js');
    const Server = require('express');
    const App = Server();
    const Router = require('./HttpServer/Router')(App);
    App.use(Router);

    

    

    App.get('/api/v1/', (req, res, next) => {
      console.log('the response will be sent by the next function ...');
      next();
    }, (req, res) => {
      res.send('Hello from D!');
      res.end();
    });

    App.get('/', (req, res) => {
      res.send('iam here');
      res.end('Lalalal');
    });

    App.startListening = function() {
      console.info(`Listening for incoming connections on port 8000.`);
      App.listen(8000);
    };

    return App;
  } else {
    return findInstance();
  }

})();