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

/**
 *   @todo: 12 good card designs: http://demo.tutorialzine.com/2016/01/12-ready-to-use-templates-for-list-pages/#article-list-thumbnails
 *   [cardTemplate description]
 *   @type {[type]}
 */

const cardRules = {
  default: {

  }
};

const flexGridCardTemplate =
`
<!--<li class="np { size }">-->
  <div hide="{ this.layoutMarkup }" style="position:absolute">
    Loading...
  </div>
  <div>
    <div class="flex-grid__item__cover-image" riot-style="background-image: { coverString }"></div>
    <img src="http://lorempixel.com/1400/400/abstract/0" class="cover-image" />
  
    <h2><a class="anchor">#32</a> Headline 2</h2>
    <div>
      <small>
        <virtual each="{ data.categories }">
          <badge addr="{ addr }" label="{ label }"></badge>
        </virtual>
      </small>
    </div>
  </div>
<!--</li>-->
`;

const flexGridCardController = function(opts) {
  'use strict';
  this.mixin('Control');
  console.log(this.getApplication());
  this.coverString = (opts.data.cover ? "url('" + opts.data.cover + "');" : "none");

  this.init = () => {
    console.error('INITIALIZED');
  };

  this.on('before-mount', (props) => {
    console.warn('Before mount here (this, props):', this, flexGridCardLayouts[this.layout]);
    if(this.layout) {
      this.layoutMarkup = flexGridCardLayouts[this.layout];
    } else {
      this.layoutMarkup = null;
      this.layout = 'default';
    };
    console.log('After before-mount state of tag: ', this);
  });
  this.on('mount', () => {
    console.log('mount state of tag: ', this);
  });

  this.expandCard = function(e) {
    e.currentTarget.classList('expanded');
    this.trigger('pageWillChange');
    riot.route('/read/' + ((this.opts.values.addr + '/') || null));
    //$('#pageTransitionPlaceholder')
  };
  console.warn('CARD THIS', this);
};

const flexGridCardComponent = riot.tag('flex-grid-card', flexGridCardTemplate, flexGridCardController);

export default flexGridCardComponent;