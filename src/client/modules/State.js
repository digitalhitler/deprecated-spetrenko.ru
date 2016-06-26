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

// Dependencies:
import EventEmitter from 'events';
import riot from 'riot';

const log = require('debug')('app:state');

class State extends EventEmitter {
  constructor(name, settings) {
    try {
      if(typeof name === 'string') {
        this._name = name;
      } else {
        throw new TypeError('State constructor can handle only string-based state names.');
      }

      if(settings) {
        if(typeof settings === 'object') {
          this._settings = settings;
        }
      }
    } catch(e) {
      log(`Someting goes wrong, state not constructed properly: \n`, e);
      return new ReferenceError('Lalalal');
    }
  }
}