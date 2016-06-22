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

"use strict";

import riot from 'riot';

const ComponentTemplate =
`
<a if="{ isLabeled }" href="{ addr }" role="badge" class="{ class: true }">
  <i if="{ withIcon }" class="{ icon: true }"></i>
  { label }
</a>
`;

const ComponentController = function(opts) {
  console.warn('NEW BADGE', this);
  'use strict';
  if(opts.icon) {
    this.withIcon = true;
  }
  if(opts.label) {
    this.isLabeled = true;
  }
  this.on('mount', () => {

  });
}

riot.tag('badge', ComponentTemplate, ComponentController);
