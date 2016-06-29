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
'use strict';

import riot from 'riot';
import page from 'page';

let dataitems = [
  {
    layout: 'default',
    size: 'small',
    cover: 'https://unsplash.it/200/300/?random',
    data: {
      addr: 'test-addr',
      image: 'http://lorempixel.com/400/200',
      headline: 'Малюсенькая',
      datePublished: Math.floor(Date.now() / 1000),
      categories: [
        {addr: 'tag1', label: 'Тег 1'},
        {addr: 'tag2', label: 'Тег 2'}
      ]
    }
  },
  {
    layout: 'default',
    size: 'small',
    cover: 'https://unsplash.it/200/300/?random',
    data: {
      addr: 'test-addr',
      image: 'http://lorempixel.com/400/200',
      headline: 'Малюсенькая',
      datePublished: Math.floor(Date.now() / 1000),
      categories: [
        {addr: 'tag1', label: 'Тег 1'},
        {addr: 'tag2', label: 'Тег 2'}
      ]
    }
  },
  {
    layout: 'default',
    size: 'small',
    cover: 'https://unsplash.it/200/300/?random',
    data: {
      addr: 'test-addr',
      image: 'http://lorempixel.com/400/200',
      headline: 'Малюсенькая',
      datePublished: Math.floor(Date.now() / 1000),
      categories: [
        {addr: 'tag1', label: 'Тег 1'},
        {addr: 'tag2', label: 'Тег 2'}
      ]
    }
  },
  {
    layout: 'default',
    size: 'large',
    cover: 'https://unsplash.it/200/300/?random',
    data: {
      addr: 'test-addr',
      image: 'http://lorempixel.com/400/200',
      headline: 'Большаааая',
      datePublished: Math.floor(Date.now() / 1000),
      categories: [
        {addr: 'tag1', label: 'Тег 1'},
        {addr: 'tag2', label: 'Тег 2'}
      ]
    }
  },
  {
    layout: 'default',
    size: 'x-small',
    cover: 'https://unsplash.it/200/300/?random',
    data: {
      addr: 'test-addr',
      headline: 'Малюсенькая',
      datePublished: Math.floor(Date.now() / 1000),
      categories: [
        {addr: 'tag1', label: 'Тег 1'},
        {addr: 'tag2', label: 'Тег 2'}
      ]
    }
  },
  {
    layout: 'default',
    size: 'x-large',
    cover: 'https://unsplash.it/200/300/?random',
    data: {
      addr: 'test-addr',
      headline: 'О Г Р О М Е Н Н А Я',
      datePublished: Math.floor(Date.now() / 1000),
      categories: [
        {addr: 'tag1', label: 'Тег 1'},
        {addr: 'tag2', label: 'Тег 2'}
      ]
    }
  }


];

const debug = require('debug')('app:router:main');

const MainRoute = function(a,b,c) {
  debug('MainRoute ====================LOADED=============',a,b,c);
}

export default MainRoute;