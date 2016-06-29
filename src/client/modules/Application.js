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
 * spetrenko.ru - my sweety personal pet-project sources                      *
 * https://github.com/digitalhitler/spetrenko.ru                              *
 *                                                                            *
 * Copyright © 1992-2016 Sergey Petrenko                                      *
 * This file may be the part of sp.ru source code.                            *
 *                                                                            *
 * This software is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/. In either words, you can do anything except any kind of commercial purposes without a permission of author.
 *                                                                            *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *                                                                            *
 *  © Sergey Petrenko <spetrenko@me.com>                                      *
 ******************************************************************************/

// Dependencies:
import EventEmitter from 'events';
import riot from 'riot';

const log = require('debug')('app:main');

let instance = window.applicationInstance = null;

/**
 * @class Application
 * @description This class is uses to handle common & top-level behavior
 * around the application.
 * @singleton
 */
class Application extends EventEmitter {
  constructor() {
    super();
    if (instance) {
      return instance;
    }

    // this.Router = new Router();
    // this.Router.navigate();

    //
    // this.on('applicationDidLoaded', function() {
    //   log('Application did loaded.');
    // });
    //
    // this.on('documentDidLoaded', function() {
    //   log('Document did loaded.');
    // });

  }

  /**
   * @returns Application
   */
  static get instance() {
    if (!instance) {
      log('Instantiating new Application');
      instance = new Application();
    } else {
      log('Linking to old instance of Application');
    }
    return instance;
  }

  static get storeScope() {
   return Application.instance;
  }

  loadExternalScript(url) {
    log('injecting external script: ' + url);
    let el = document.createElement('script');
    el.type = 'text/javascript';
    el.src = url;
    document.getElementsByTagName('head')[0].appendChild(el);

  }

  loadComponents(components) {
    if(typeof components === 'string') {
      components = [ components ];
    }
    log('injecting components instances: ', components);
    if(typeof components === 'object') {
      for(let curr in components) {
        require(`../components/${components[curr]}`);
      }
    }
  }

  // use

}

/** EXPORTS **/
export function findInstance() {
  return Application.instance;
}

export default Application;

