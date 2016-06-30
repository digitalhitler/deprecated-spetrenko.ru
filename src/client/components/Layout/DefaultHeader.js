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

riot.tag('layout-header',
`
<header id="stickyHeader">
  <nav id="mainMenu">
    <div class="mainMenu__button">
      <a onclick="{ toggleMainMenu }" href="#">
        <span class="ion-navicon inverse"></span>
      </a>
    </div>
    <div class="mainMenu__container">
      <div class="mainMenu__button back">
        <a onclick="{ toggleMainMenu }" href="#">
          <span class="ion-arrow-left-c inverse"></span>
        </a>
      </div>
      <h2>Ubludok</h2>
      <ul class="mainmenu--headings">
        <li each="{ menuItems }"><i class="{ icon }"></i><a href="#!{ addr }"><span>{ label }</span></a></li>
      </ul>

      <span class="mainmenu--bg"></span>
    </div>
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

      // * Constants
      const menuVisibleClass = 'mainMenu__visible';

      this.mixin('Control');

      // * DOM links
      this.dom = {};
      this.dom.menuElement = null;
      this.initialState = this.opts.initialState;
      console.info(this);

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
      this.toggleMainMenu = () => {
        let mainMenu = document.querySelector('.mainMenu__container');
        mainMenu.toggleClass(menuVisibleClass);
        SP.DOM.toggleVisibility(mainMenu);
        this.mainMenuIsVisible = this.dom.menuElement.hasClass(menuVisibleClass);
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

      this.isCurrentMenuItem = (key) => {
        return (this.currentMenuItem == key);
      };

      this.show = () => {
        this.stickyHeader.classList.add('animation');
        this.stickyHeader.addEventListener('animationend', () => {
          console.log("ANIMATED");
          //this.stickyHeader.classList.remove('animation');
        });
      };

      this.hide = () => {
        "use strict";
        this.stickyHeader.classList.add('animation-reverse').add('animation');
      };

      this.on('before-mount', () => {
        console.log(this.app);
        this.defineComponentReference('layoutHeader', this);
      });

      this.on('mount', (opts) => {
        this.options = opts;
        $(document).on('mouseup', (event) => {
          let isEventTargetIsMenu = ($(event.target).is('.' + menuVisibleClass)
                                  || $(event.target).is('.' + menuVisibleClass + ' *'));
          console.log(isEventTargetIsMenu, this.mainMenuIsVisible);
          if (!isEventTargetIsMenu && this.mainMenuIsVisible)  {
            this.toggleMainMenu();
          }
        });
      });
    }
);
