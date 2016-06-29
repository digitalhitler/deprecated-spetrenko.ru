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

/**
	@todo Someday...
**/

"use strict";

const chalk = require('chalk');

function isConsoleOutput() {
	return (process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'staging' ||
      forceDebug === true
  );
}

function isFileOutput() {
	
}

function isValidErrorStatus(status) {
    return typeof status === 'number' && status >= 400 && status < 600;
}

module.exports = {
	logComponentInfo: function (component, info) {
	  if (isConsoleRequired()) {
	    console.info(chalk.cyan(component + ':', info));
	  }
	},
	
	logComponentWarn: function (component, warning) {
    if (isConsoleRequired()) {
      console.info(chalk.yellow(component + ':', warning));
    }
  },
  
  logWarn: function (warn, context, help) {
    if ((process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'staging' ||
      process.env.NODE_ENV === 'production')) {
      warn = warn || 'No message supplied';
      var msgs = [chalk.yellow('Warning', warn), '\n'];

      if (context) {
          msgs.push(chalk.white(context), '\n');
      }

      if (help) {
          msgs.push(chalk.green(help));
      }

      // add a new line
      msgs.push('\n');

      console.log.apply(console, msgs);
    }
  },
	
}