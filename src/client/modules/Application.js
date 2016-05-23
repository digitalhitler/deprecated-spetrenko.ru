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

"use strict";

import EventEmitter from 'events';

let singleton = Symbol();
let singletonEnforcer = Symbol();

/**
 * @singleton Application
 * @description This class is uses to handle common & top-level behavior
 * around the application.
 */
class Application extends EventEmitter {
  constructor(enforcer) {
    super();
    if (enforcer !== singletonEnforcer) {
      //throw new Error("Cannot construct Application: enforcer is wrong");
      return singletonEnforcer;
    }
    this.on('applicationDidLoaded', function() {
      console.info('Application did loaded.');
    });

    this.on('documentDidLoaded', function() {
      console.info('Document did loaded.');
    });
  }

  /**
   * @returns Application
   */
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Application(singletonEnforcer);
    }
    return this[singleton];
  }

  static get storeScope() {
    let globalScope = global || window;
    if (!globalScope.__appStoreScope) {
      globalScope.__appStoreScope = {};
    }
    return globalScope.__appStoreScope;
  }
}

export default Application;