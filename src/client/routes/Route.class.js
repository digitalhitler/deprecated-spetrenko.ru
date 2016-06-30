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

import EventEmitter from 'events';
import debug from 'debug';

class Route extends EventEmitter {
  constructor(props) {
    super();
    if(!props || !(props && typeof props === 'object')) {
      props = {};
    }

    this.__routeName = (
      props.displayName && typeof props.displayName === 'string'
          ? props.displayName
          : 'common' );
    this.debug = debug(`app:routes:${this.__routeName}`);
  }
  
  get handler() {
    return this.__handler || null;
  }
  
  set handler(callback) {
    if(callback && typeof callback === 'function') {
      this.__handler = callback;
    } else return false;
  }

  static get pageSchema() {
    return SP.DOM.bodyAttribs.get('data-schema');
  }

  static set pageSchema(newSchema) {
    if(this.pageSchema) {
      document.body.classList.remove(this.pageSchema);
    }
    SP.DOM.bodyAttribs.set('data-schema', newSchema);
    document.body.classList.add(newSchema);
  }
}

export default Route;