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

const flexGridTemplate =
`
<div class="flex-grid">
  <ul class="flex-grid__list x w z">
    <virtual each="{ items }">
      <!-- @todo: not very clever to send this.size to component twice -->
      <flex-grid-card 
        class="np { this.size} " 
        layout="{ this.layout }"
        size="{ this.size }"
        data="{ this }"></flex-grid-card>
    </virtual>
  </ul>
</div>
`;

const flexGridController = function() {
  'use strict';
  console.info('Loaded flexGrid', this);
  this.items = this.opts.items;
 // this.cardTemplate = this.opts.cardTemplate || 'default';
  this.on('mount', () => {
    console.warn('Mount FG!', this);
  });
  this.on('unmount', () => {
    console.error('unmo', this);
  });
};

const flexGridComponent = riot.tag('flex-grid', flexGridTemplate, flexGridController);

export default flexGridComponent;
