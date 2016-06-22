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
'use strict';

import riot from 'riot';

let dataitems = [
  {
    addr: 'test-addr',
    type: ''
    layout: 'post-classic',
    image: 'http://lorempixel.com/400/200',
    headline: 'Lalala',
    datePublished: Math.floor(Date.now()/1000),
    categories: [
      {
        addr: 'tag1',
        label: 'Тег 1'
      },

      {
        addr: 'tag2',
        label: 'Тег 2'
      }
    ]
  },
  {
    addr: 'test-addr',
    layout: 'classic',
    headline: 'Lalala',
    datePublished: Math.floor(Date.now()/1000),
    categories: [
      {
        addr: 'tag1',
        label: 'Тег 1'
      },

      {
        addr: 'tag2',
        label: 'Тег 2'
      }
    ]
  },
  {
    addr: 'test-addr',
    layout: 'classic',
    headline: 'Lalala',
    datePublished: Math.floor(Date.now()/1000),
    categories: [
      {
        addr: 'tag1',
        label: 'Тег 1'
      },

      {
        addr: 'tag2',
        label: 'Тег 2'
      }
    ]
  }
];

const debug = require('debug')('app:router:main');

export function Handle(postId) {
  let urlParams = riot.route.query();
  debug('*** Main will route to:\n', postId, urlParams);
  riot.mount('#PageContainer', 'items-grid', {
    items: dataitems
  });
};