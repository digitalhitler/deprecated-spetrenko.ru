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
import Application from './modules/Application';
import riot from 'riot';
import jquery from 'jquery';

/* Components */
import { default as Components } from './components';

(function() {

  const app = Application.instance;
  const scope = Application.storeScope;
  const $ = jquery;
  if(window) {
    window.$ = jquery;
  }

  //let built = riot.compile(Components.App);
  //console.log(built);
  riot.mount('*');
  riot.route.base('#!');
  riot.route.start(true);
  riot.route('/about', function() {
    'use strict';
    console.info('i am on about');
  });
  riot.route('/', function() {
    'use strict';
    console.info('i am on main');
  })

  app.emit('applicationDidLoaded');

  $(document).ready(function() {
    'use strict';
    app.emit('documentDidLoaded');
  })

}());
