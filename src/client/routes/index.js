/**
* @Author: Sergey S Petrenko <getrix>
* @Date:   2016-05-23T17:29:22+03:00
* @Email:  spetrenko@me.com
* @Project: spetrenko.ru
* @Last modified by:   getrix
* @Last modified time: 2016-05-25T15:40:16+03:00
* @License: This software is licensed under the Creative Commons Attribution-NonCommercial 4.0
International License.
To view a copy of this license, visit: http://creativecommons.org/licenses/by-nc/4.0/.
In either words, you can do anything except any kind of commercial purposes without
a permission of author.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/


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

import riot from 'riot';

const RoutesList = {
  Main: require('./Main/Main.js'),
  Read: require('./Read/Main.js'),
  Edit: require('./Edit/Main.js'),
};

(function() {
  riot.route.base('#!');
  riot.route.start(true);
  riot.route('/about', function() {
    'use strict';
    console.info('i am on about');
  });

  riot.route('/read/*', RoutesList.Read.Handle);
  riot.route('/edit..', RoutesList.Edit.Handle);

  let dataitems = [
    {
      addr: 'test-addr',
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

  riot.route('/', function() {
    'use strict';
    console.info('i am on main');
    riot.mount('#PageContainer', 'items-grid', {
      items: dataitems
    });
  });
}());

export default RoutesList;
