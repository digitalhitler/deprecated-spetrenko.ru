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

const forceDebug = true;

const App = (function(){

	if(global.__appInstance) {
		return global.__appInstance;
	}

	let App = {};

	App.getRunningEnvironment = function() {
		return (process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'staging' ||
      forceDebug === true
		);
	}

	App.formatErrorResponse = function(errType, errTitle, errDescription, err, data) {
		let response = {};
		response.error = true;
		response.errorDetails = {
			title: errTitle || 'Unknown error',
			description: errDescription || false,
			raw: err || {},
			data: data || {}
		}
		return response;
	}

	return App;
})();


global.__appInstance = null;

global.getAppInstance = function() {
	if(typeof global.__appInstance !== 'object') {
		global.__appInstance
	}
}

module.exports = App;
