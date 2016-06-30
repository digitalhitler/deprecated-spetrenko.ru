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

const RawComponentTemplate = `<yield></yield><span></span>`;

const RawComponentController = function() {
  'use strict';
  this.on('update', () => {
    this.root.innerHTML = this.opts.content;
  })
};

riot.tag('raw', RawComponentTemplate, RawComponentController);
