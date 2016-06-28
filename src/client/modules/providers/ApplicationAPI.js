/******************************************************************************
 * @project spetrenko.ru                                                      *
 * @description My sweety personal pet-project sources                        *
 * @repository https://github.com/digitalhitler/spetrenko.ru                  *
 *                                                                            *
 * @author Sergey Petrenko <spetrenko@me.com>                                 *
 * @license Creative Commons Attribution-NonCommercial 4.0                    *
 * @licenseUrl  http://creativecommons.org/licenses/by-nc/4.0/                *
 *                                                                            *
 ******************************************************************************/

/******************************************************************************
 * @project spetrenko.ru                                                      *
 * @description My sweety personal pet-project sources                        *
 * @repository https://github.com/digitalhitler/spetrenko.ru                  *
 *                                                                            *
 * @author Sergey Petrenko <spetrenko@me.com>                                 *
 * @license Creative Commons Attribution-NonCommercial 4.0                    *
 * @licenseUrl  http://creativecommons.org/licenses/by-nc/4.0/                *
 *                                                                            *
 ******************************************************************************/

"use strict";

import riot from 'riot';
import { default as transport } from 'reqwest';

const log = require('debug')('app:apiprovider');
const config = {
  urlPrefix: 'http://spetrenko.ru:9998/',
  defaultMethod: 'GET'
};


let singletonInstance = null,
    privateSettings = {},
    runtimeData = {};

class ApiProvider {
  constructor() {
    if (singletonInstance) {
      return singletonInstance;
    } else {
      this.config = config;
    }
  }
  
  sendRequest(methodName, querySettings) {
    // Currently no auth required:
    // if(!this.isAuthorized()) {
    //   log(`Warning! API is not authorized. Please login.`);
    //   return false;
    // }

    // if(!typeof params === 'object') params = { not_set: true };

    if ('object' !== typeof querySettings.data) querySettings.data = {};
    // About auth again:
    // querySettings.data.access_token = privateSettings.token;
    querySettings.method = querySettings.method || config.defaultMethod;

    const query = {
      url: config.urlPrefix + methodName,
      method: querySettings.method,
      data: querySettings.data,

      // @TODO: check these:
      jsonp: 'foo',
      jsonpCallback: 'bar',
      crossOrigin: false,
      // @TODO: REMOVE IT before production! Highly flammable!
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
    log(`XHR – Requesting ${methodName}...`, query);
    transport(query)
        .then((resp) => {
          log(`XHR - Got response from server to ${methodName} query:\n`, resp);
          if(typeof querySettings.success === 'function') {
            querySettings.success(resp);
          }
        })
        .fail((err, msg) => {
          log('XHR ERROR: \n', err, msg);
          if(typeof queryString.failure === 'function') {
            querySettings.failure(err, msg);
          }
        });
  }

  /**
   * @returns ApiProvider
   */
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new ApiProvider(singletonEnforcer);
    }
    return this[singleton];
  }


  // === API auth methods (not used in this case)
  /**
   * @getter token
   * @returns {*}
   */
  // static get token() {
  //   if(currentToken) return currentToken;
  //   if(localStorage) {
  //     if(	localStorage.vick &&
  //         localStorage.vick.token &&
  //         typeof localStorage.vick.token === 'string') {
  //       return localStorage.vick.token;
  //     }
  //   } else {
  //     debug('Error: localStorage is not available here. Please use something more modern here');
  //     return false;
  //   }
  // }
  //
  // static set token(val) {
  //   if(typeof val !== 'string') {
  //     return false;
  //   }
  //
  //   if(!localStorage) {
  //     debug('Error: localStorage is not available here. Please use something more modern here');
  //     return false;
  //   } else {
  //     if(!localStorage.vick) localStorage.vick = {
  //       token: val
  //     };
  //     currentToken = val;
  //     return true;
  //   }
  // }
}

export default ApiProvider;
