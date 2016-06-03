"use strict";

const forceDebug = true;

const App = function(){
	
	if(appInstance) {
		return appInstance;
	}
	
	let App = {};
	
	App.prototype.getRunningEnvironment = function() {
		return (process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'staging' ||
      forceDebug === true
		);
	}
})();


global.__appInstance = null;

global.appGetInstance = function() {
	if(typeof global.__appInstance !== 'object') {
				
	}
}

module.exports = function() {
		
};
