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
let layoutTemplate = `
<div class="flex-grid__item__cover-image" riot-style="background-image: {{=it.coverString}}"></div>
<img src="http://lorempixel.com/1400/400/abstract/0" class="cover-image" />

<h2><a class="anchor">#32</a> Headline 2</h2>
<div>
  <small>
    <virtual each="{ data.categories }">
      <badge addr="{ addr }" label="{ label }"></badge>
    </virtual>
  </small>
</div>
`;

export default layoutTemplate;