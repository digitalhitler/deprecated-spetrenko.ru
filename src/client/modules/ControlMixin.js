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

const log = require('debug')('app:mixins:control');
const applicationInstance = require('./Application').findInstance();

const ControlMixin = {
  init: function() {
    log(`Control mixin attached`, arguments);
  },

  getApplication: function() {
    return applicationInstance;
  },

  changeRootState(rootStateName, rootStateConfiguration) {
    console.log(this);
  },

  bindRootHandler(name, handler, once) {
    let app = this.getApplication();
    if(typeof name === 'string' && typeof handeler === 'function') {
      let applyHandler = (once === true ? app.on : app.one);
      applyHandler(name, handler);
    }
  }


};

export default ControlMixin;