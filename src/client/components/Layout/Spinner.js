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

// @todo: move it to genericControls
import riot from 'riot';

const spinnerTemplate =
`
<div class="loader" style="position: fixed; top: 0; left: 0;
z-index:1001" hidden>Loading...</div>
`;

const spinnerController = function(opts) {
  'use strict';

}

riot.tag('spinner', spinnerTemplate, spinnerController);
