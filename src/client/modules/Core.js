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
"use strict";

import EventEmitter from 'events';

if(typeof window.SP === 'undefined') {
  window.SP = {
    __data: {}
  };
}

window.SP.App = null;

window.SP.Emitter = new EventEmitter();

window.SP.Initializer = {
  add: function(callback) {
    if(callback && typeof callback === "function") {
      SP.Emitter.once('__core_init', callback);
    } else return false;
  }
};


/*** Object ***/
window.SP.Object = {
  isBasedOn: function(obj, name) {
    return (
        object &&
        typeof obj === "object" &&
        obj instanceof name
    );
  },

  isFunction: function(func) {
    return (func && typeof func === "function");
  },

  extends: Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
};

window.SP.Detector = {};

window.SP.DOM = {
  getNode: function(selector) {
    return document.querySelector(selector);
  },
  toggleVisibility: function(node) {
    if(node.style.display === 'block') {
       node.style.display = 'none';
    } else {
      node.style.display = 'block';
    }
  }
};

/*** Registry ***/
window.SP.Registry = {
  get: function(name) {
    if(SP.Object.isBasedOn(SP.__data.registry[name], 'Registry')) {
      return SP.__data.registry[name];
    }
  },

  set: function(name, object) {
    if(name && typeof name === 'string') {
      object = object || null;
      SP.__data.registry[name] = object;
      return true;
    } else return false;
  }
};
window.SP.Initializer.add(function() {
  if(!window.SP.__data.registry) {
    window.SP.__data.registry = {};
  }
});

/*** Storage ***/
window.SP.Storage = {};

/*** State ***/
window.SP.State = {
  // loadRouteRoot: function(route) {
  //   if(!window.SP.State.routes) {
  //     window.SP.State.routes = {};
  //   }
  //   if(route && typeof route === "string") {
  //     window.SP.State.routes[route] = require();
  //   }
  // }
};
window.SP.Initializer.add(() => {
  // window.SP.State.router = require('page');
  // window.SP.State.router.base('/');
})


/*** Debugger ***/
window.SP.Debugger = {
  dumpComponent: function(component) {
    if(component.constructor.name !== "Tag") {
      console.error('dump failed: not a proper component:', component);
      return;
    }
    console.info('dump of #' + component._riot_id + ' (' + (component.isMounted ? 'mounted' : 'not mounted') + '):');
    console.log(' * Next floor buddy: ', this.parent,
        ' * Children: ', this.tags,
        ' * Root', this.root,
        ' * Options, params & state:', this.opts, this.params, this.state);
  }
};

window.SP.Emitter.emit('__core_init');

export default function getFrameworkScope() {
  return window.SP;
};