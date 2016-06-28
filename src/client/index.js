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

/**
 * @project
 * spetrenko.ru - my sweety personal pet-project sources
 *
 * @link
 * https://github.com/digitalhitler/spetrenko.ru
 *
 * @version 0.0.1
 *
 * @copyright
 * Copyright © 1992-2016 Sergey Petrenko
 * This file may be the part of sp.ru source code.
 *
 * This software is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/. In either words, you can do anything except any kind of commercial purposes without a permission of author.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @author
 *  © Sergey Petrenko <spetrenko@me.com>
 */

/* Polyfill */
//import 'babel-polyfill';

/* Styles */
import './stylesheets/main.scss';

/* Dependencies */
// Global (node):
//import React from 'react';
//import { render } from 'react-dom';

// Local (modules folder):
import Core from './modules/Core';
import Application from './modules/Application';
import riot from 'riot';
import jquery from 'jquery';
import debug from 'debug';

/* Components */
import { default as Components } from './components';
import { default as ControlMixin } from './modules/ControlMixin';


(function() {

  const defaultState = {
    currentState: null,
    isLoading:    true,
    windowTitle:  null
  };

  const app = new Application();
  const $ = jquery;
  // localStorage.debug = 'app:*';
  if(window) {
    window.$ = jquery;
    window.applicationInstance = window.SP.App = app;
    window.applicationScope = app.storeScope;
  }

  riot.mixin('Control', ControlMixin);
  app.rootComponent = riot.mount('app', defaultState)[0];

  app.emit('applicationDidLoaded');

  $(document).ready(function() {
    'use strict';
    $("#preloading").addClass("dismiss");
    
    app.emit('documentDidLoaded');
  })

}());
