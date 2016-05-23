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
 *   5/18/16 3:08 AM
 *   First implemented.
 ******************************************************************************/

'use strict';

const HttpRequest =   require('./Request');
const HttpResponse =  require('./Response');

class HttpTransaction {

  constructor (request) {

    if(typeof request === 'object') {
      this.settings   = {};
      this.runtime = {
        currentPhase: HttpTransaction.phases().CONN_IDLE
      };
      this.request  = (request instanceof HttpRequest ? request : new HttpRequest(request));
      this.response = new HttpResponse(request);
    } else return false;
  }

  static phases () {
    return {
      CONN_FAILURE:     -1,
      CONN_IDLE:         0,
      CONN_OPENING:      5,
      RECEIVING_REQUEST: 4,
      HANDLING_REQUEST:  3,
      SENDING_RESPONSE:  2,
      SUCCESS:           1
    };
  }
}

module.exports = HttpTransaction;
