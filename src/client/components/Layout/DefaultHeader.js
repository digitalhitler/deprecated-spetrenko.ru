/**
* @Author: Sergey S Petrenko <getrix>
* @Date:   2016-05-23T21:16:07+03:00
* @Email:  spetrenko@me.com
* @Project: spetrenko.ru
* @Last modified by:   getrix
* @Last modified time: 2016-05-26T13:01:05+03:00
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

riot.tag('layout-header',
`
<header id="stickyHeader">
    <nav class="mainmenu">
      <a class="mainmenu--button" onclick="{ toggleMainMenu }">
        <span class="ion-navicon inverse"></span>
      </a>

      <ul>
        <li each="{ menuItems }"><i class="{ icon }"></i><a href="#!{ addr }"><span>{ label }</span></a></li>
      </ul>

      <span class="mainmenu--bg"></span>
    </nav>
  <span class="header-label header-label-title">
    <a href="#!">Sergey Petrenko</a>
  </span>
  <h1><span id="headerTitle"><i class="ion-ios-search-strong"></i> { pageTitle || 'Search' }</span></h1>
  <span class="header-button header-button-right">
    <a href="#">S</a>
  </span>
</span>
</header>
`,
    function() {
      'use strict';

      // * Properties
      this.menuItems = [
        {
          key: 'home',
          addr: '/',
          icon: 'ion-home',
          label: 'Начало'
        },
        {
          addr: '/read',
          icon: 'ion-document',
          label: 'Блог'
        },
        {
          addr: '/photos',
          icon: 'ion-camera',
          label: 'Фоточки'
        },
        {
          addr: '/about',
          icon: 'ion-home',
          label: 'Обо мне'
        }
      ];
      // this.currentMenuItem = 'home';
      this.mainMenuIsVisible = false;

      // * Methods
      this.toggleMainMenu = function() {
        let mainMenuTrigger = $('.mainmenu');
        mainMenuTrigger.toggleClass('mainmenu--visible');
        this.mainMenuIsVisible = !this.mainMenuIsVisible;
      };

      // this.setCurrentMenuItem = function(key) {
      //   if(this.menuItems[key]) {
      //     if(!key) {
      //       // @todo: detect current item key
      //     }
      //
      //     for(let k in this.menuItems) {
      //       this.menuItems[k].current = (k === key);
      //     }
      //
      //     console.warn('Updated menu:', this.menuItems);
      //     this.update({
      //       currentMenuItem: key
      //     });
      //   }
      // }

      this.isCurrentMenuItem = function(key) {
        return (this.currentMenuItem == key);
      };

      // * Events:
      this.on('pageWillChange', function(params) {
        console.info('Got broadcast: ', params);
      });
      this.on('update', () => {
        console.warn('SOMETHING UPDATED\n\n======', this);
      });

      let menuComponent = this;
      this.on('mount', () => {
        $(this.stickyHeader).addClass('animation');
        $(document).on('mouseup', function(event) {
          let isEventTargetIsMenu = ($(event.target).is('.mainmenu--visible') || $(event.target).is('.mainmenu--visible *'));
          console.log(isEventTargetIsMenu, menuComponent.mainMenuIsVisible);
          if (!isEventTargetIsMenu && menuComponent.mainMenuIsVisible)  {
            menuComponent.toggleMainMenu();
          }
        });
      });
    }
);
