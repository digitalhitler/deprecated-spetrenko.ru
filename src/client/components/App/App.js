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

import riot from 'riot';
// import '../../modules/Router';
import '../../modules/ControlMixin';
import '../../routes';


const log = require('debug')('app:components:app');
const applicationInstance = require('../../modules/Application').findInstance();

const appComponent = riot.tag('app', `
  <spinner></spinner>
  <div id="HeaderContainer">
    <layout-header></layout-header>
  </div>
  <div id="PageContainer">
  </div>
  `,  
  function(params) {
    'use strict';
    // * Links:
    this.__defaults = params;
    this.__initialized = false;
    this.app = applicationInstance;

    // * Initialization:
    this.init = () => {
      if(this.__initialized) return;

      // this.mixin('rg.router');
      this.app.__state = {
        routing: false,
        current: undefined,
        previous: undefined,
      };

      this.app.on('appStateChanged', () => {
        this.app.Loader.complete();
      });

      this.app.on('appStateWillChange', () => {
        this.app.Loader.begin();
      });

      this.app.on('appStateReachedProgress', (e) => {
        this.app.Loader.set(e);
      });
      //
      // this.router.on('start', () => {
      //   this.app.__state.routing = true;
      // });
      //
      // this.router.on('stop', () => {
      //   this.app.__state.routing = false;
      // });
      //
      // this.router.on('go', (current, previous) => {
      //   log('Routing to: ', current);
      //   console.log(this);
      //   if(this.app.__state.data && SP.Object.isFunction(this.app.__state.data.beforeGo)) {
      //     this.app.__state.data.beforeGo();
      //   }
      //   this.app.__state.current  = current;
      //   this.app.__state.previous = previous;
      // });

      this.__initialized = true;
    };


    // * Events:
    this.on('pageWillChange', function(params) {
      console.error('Got broadcast:\n', params);
    });
    this.on('update', () => {
      //log('App tag updated:\n', this);
    });
    this.on('before-mount', () => {

    });
    this.on('mount', (attrs) => {
      log('+++ Mounted App', attrs, this);
      $('body').addClass('cs-default');
    });
  }
);

export default appComponent;