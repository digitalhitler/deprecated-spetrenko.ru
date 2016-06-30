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

import riot from 'riot';
import '../../modules/providers/CompiledHTML';

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
  <div class="{ size }">
    <!--<div class="flex-grid__item__cover-image" riot-style="background-image: { coverString }"></div>-->
    <!--<img src="http://lorempixel.com/1400/400/abstract/0" class="cover-image" />-->
  <!---->
    <raw content="{ this.compiledLayout }">
      <div>
        <small>
          <virtual each="{ data.categories }">
            <badge addr="{ addr }" label="{ label }"></badge>
          </virtual>
        </small>
      </div>
    </raw>
   </div>
`;

const flexGridCardController = function(opts) {
  'use strict';
 // this.mixin('Control');
  this.init = () => {
    this.coverString = (opts.data.cover ? "url('" + opts.data.cover + "');" : "none");
    this.layout = opts.layout || "default";
    this.layoutTemplate = require('./layouts/' + opts.layout).default;
  };

  this.build = () => {
    let builder = doT.template(this.layoutTemplate);
    return builder({
      coverString: this.coverString,
      data: this.data,
      compiledLayout: this.compiledLayout,
      layout: this.layout,
      size: this.size
    });
  };

  this.on('before-mount', () => {
    this.init();
  });

  this.on('before-mount update', () => {
    this.compiledLayout = this.build();
  });

  this.on('mount', () => {

  });

  this.expandCard = function(e) {
    e.currentTarget.classList('expanded');
    this.trigger('pageWillChange');
    riot.route('/read/' + ((this.opts.values.addr + '/') || null));
    //$('#pageTransitionPlaceholder')
  };
  console.warn('CARD THIS', this);
};

const flexGridCardComponent = riot.tag(
    'flex-grid-card',
    flexGridCardTemplate,
    flexGridCardController);

export default flexGridCardComponent;