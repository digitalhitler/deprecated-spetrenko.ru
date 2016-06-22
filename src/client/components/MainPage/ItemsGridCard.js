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

/**
* @Author: Sergey S Petrenko <getrix>
* @Date:   2016-05-24T05:39:03+03:00
* @Email:  spetrenko@me.com
* @Project: spetrenko.ru
* @Last modified by:   getrix
* @Last modified time: 2016-05-25T15:41:21+03:00
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


import riot from 'riot';

/**
 *   @todo: 12 good card designs: http://demo.tutorialzine.com/2016/01/12-ready-to-use-templates-for-list-pages/#article-list-thumbnails
 *   [cardTemplate description]
 *   @type {[type]}
 */
const cardTemplate =
`
<div class="items-grid-card" onclick="{ expandCard }">
  <div>
    <img data-src="{ image }" class="cover-image">
    <h3>{ headline }</h3>
    <div>
      <span class="items-grid-card--tags">
        <virtual each="{ categories }">
          <badge addr="{ addr }" label="{ label }"></badge>
        </virtual>
      </span>
      <span>
        <datetime timestamp="{datePublished}"></datetime>
      </span>
    </div>
  </div>
</div>
`;

const cardController = function(opts) {
  'use strict';
  const ts = this.opts.values.datePublished;
  this.datePublished = ts;
  this.expandCard = function(e) {
    $(e.currentTarget).addClass('expanded');
    console.info('THIS HAS TRIGGERS TO BROADCAST:', this, riot);
    // this.trigger('pageWillChange');
    // riot.route('/read/' + ((this.opts.values.addr + '/') || null));
    //$('#pageTransitionPlaceholder')
  }
  console.warn('CARD THIS', this);
  this.on('mount', () => {

  });
}

riot.tag('items-grid-card', cardTemplate, cardController);
