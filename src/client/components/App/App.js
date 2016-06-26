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

/**
* @Author: Sergey S Petrenko <getrix>
* @Date:   2016-05-24T02:54:19+03:00
* @Email:  spetrenko@me.com
* @Project: spetrenko.ru
* @Last modified by:   getrix
* @Last modified time: 2016-05-25T15:14:04+03:00
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
import { default } from '../../modules/ControlMixin';

const log = require('debug')('app:components:app');
const applicationInstance = require('../../modules/Application').findInstance();

const appComponent = riot.tag('app', `
  <spinner></spinner>
  <div id="HeaderContainer">
    <layout-header></layout-header>
  </div>
  <div id="PageContainer">
  </div>
  `,  
  function(params) {
    'use strict';
    // * Params:
    this.state = params;
    this.env = {};
    this.env.app = applicationInstance;
    // * Events:
    this.on('pageWillChange', function(params) {
      log('Got broadcast:\n', params);
    });
    this.on('update', () => {
      log('App tag updated:\n', this);
    });
    this.on('mount', (attrs) => {
      log('+++ Mounted App', attrs, this);
      $('body').addClass('cs-default');
    });
  }
);

export default appComponent;