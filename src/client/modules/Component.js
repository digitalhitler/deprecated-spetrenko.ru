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

import EventEmitter from 'events';
import riot from 'riot';

const applicationInstance = require('../../modules/Application').findInstance();
const tagRelatedEvents = [ "mount", "update", "unmount" ];
const ComponentMixin = {
  
};


// class Component extends EventEmitter {
//   constructor(name) {
//     super();
//     this.__isUsable = false;
//     this.__isRegistered = false;
//     this.__name = name;
//     this.__template = null;
//     this.__methods = {};
//     this.__events = {};
//     this.__log = require('debug')('app:components:' + (name.toLowerCase() || name);
//   }
//
//   __checkUsability() {
//     this.__isUsable = !!(this.__template && this.__name);
//     return this.__isUsable;
//   }
//
//   __handlerFactory() {
//     if(this.__checkUsability()) {
//       let component = this;
//       let handler = function(component) {
//         if(component.__methods.length > 0) {
//           for(let method in component.__methods) {
//             this[method] = component.__methods[method];
//           }
//         }
//
//         if(components.__events.length > 0) {
//           for(let tagEvent in tagRelatedEvents) {
//             if(component.__events[tagEvent]) {
//               this.
//             }
//           }
//           for(let event in component.__events) {
//             if(event in )
//           }
//         };
//         if(params) {
//           this.params = params;
//         }
//       }
//     }
//   }
//
//   __registerTag() {
//     if(this.__isRegistered === false && this.__checkUsability()) {
//       let handler = this.__handlerFactory();
//       this.tag = riot.tag(
//           this.__name,
//           this.__template,
//           handler,
//       );
//       this.__isRegistered = true;
//     }
//     return this.__isRegistered;
//   }
//
//   registerEvent(name, once = false) {
//     if(!this.__events[name]) {
//       this.__events[name] = {
//         __fires: 0,
//         __listeners: []
//       };
//     }
//   }
//
//   setTemplate(tpl) {
//     if(tpl && typeof tpl === 'string') {
//       this.__template = tpl;
//       if(this.__checkUsability()) {
//         this.__registerTag();
//       }
//     }
//   }
//
//   render() {
//     if(this.__isUsable) {
//
//     } else return false;
//   }
// }
