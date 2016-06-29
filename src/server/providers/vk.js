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


// Dependencies:
const request = require('request');
const log = require('debug')('app:vkprovider');

// Default configuration:
const config = {
	urlPrefix: 'https://api.vk.com/method/',
	defaultMethod: 'GET',
	defaultLang:   'ru',
	defaultVersion:'5.52',
};

/**
 *   @todo: request library can provide OAuth for us. Let's use it!
 *   Details: https://github.com/request/request
 */


// Runtime:
let singletonInstance = null,
    privateSettings = {},
    localStorage = {},
		runtimeData = {};


/**
 * @class VkProvider
 *
 */
class VkProvider {
	constructor() {
		if (singletonInstance) {
			return singletonInstance;
    } else {
			privateSettings.token = '54f62161402ffc17396c2213779eddb0873c2da30558ce24e9642513ed9638204fe016cfd0127c5674af5';
			privateSettings.userId = 316558338;
			this.config = config;
      this.transport = request.defaults({
        baseUrl: config.urlPrefix,
        timeout: 5000,

      })
		}
	}

	isAuthorized(forceRecheck) {
		if(forceRecheck === true) {
			// @todo: recheck here
		}
		if(privateSettings.token && privateSettings.userId) {
			return privateSettings.userId;
		}
		return false;
	}

	sendRequest(methodName, querySettings) {
		if(!this.isAuthorized()) {
			log(`Warning! VK is not authorized. Please login.`);
			return false;
		}

		// if(!typeof params === 'object') params = { not_set: true };
		if(!typeof querySettings.data   === 'object') querySettings.data   = {};
		querySettings.data.access_token = privateSettings.token;
		querySettings.data.lang = querySettings.data.lang || config.defaultLang;
		querySettings.data.version = querySettings.data.version || config.defaultVersion;
		querySettings.method = querySettings.method || config.defaultMethod;

		const query = {
			uri: methodName,
			method: querySettings.method,
			qs: querySettings.data,
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		}
		log(`API – Requesting ${methodName}...`, query);
		this.transport(query, (err, msg) => {
      if(typeof querySettings.success === 'function') {
        querySettings.success(err, msg);
      }
		});
	}

	/**
   * @returns VkProvider
   */
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new VkProvider(singletonEnforcer);
    }
    return this[singleton];
  }

  static get token() {
	  if(currentToken) return currentToken;
	  if(localStorage) {
		  if(	localStorage.vk &&
		  			localStorage.vk.token &&
		  			typeof localStorage.vk.token === 'string') {
				return localStorage.vk.token;
		  	}
	  } else {
		  debug('Error: localStorage is not available here. Please use something more modern here');
		  return false;
	  }
  }

  static set token(val) {
	  if(typeof val !== 'string') {
		  return false;
	  }

	  if(!localStorage) {
		  debug('Error: localStorage is not available here. Please use something more modern here');
		  return false;
	  } else {
		  if(!localStorage.vk) localStorage.vk = {
			  token: val
			};
			currentToken = val;
			return true;
	  }
  }
}

module.exports = new VkProvider();
