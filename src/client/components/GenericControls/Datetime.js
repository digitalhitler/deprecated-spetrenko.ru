/**
* @Author: Sergey S Petrenko <getrix>
* @Date:   2016-05-24T05:39:03+03:00
* @Email:  spetrenko@me.com
* @Project: spetrenko.ru
* @Last modified by:   getrix
* @Last modified time: 2016-05-24T19:53:05+03:00
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
import moment from 'moment';
moment.locale('ru');

const ComponentTemplate =
`
<span title={fullDate}>{printDate}</span>
`;

const debug = require('debug')('app:components:datetime');

const ComponentController = function(opts) {
  'use strict';
  const myopts = this.opts;
  console.log(myopts);

  if(!this.opts.timestamp) return false;
  else
  this.timestamp       = this.opts.timestamp;
  this.relmax   = this.opts.relmax || 24 * 3;
  this.format   = this.opts.format || 'D MMMM Y H:mm';
  console.info('[event] GC:Datetime: ', this);

  const dateHandler = moment(this.timestamp * 1000);
  const now = moment();
  const diffHours = dateHandler.diff(now, 'hours');
  if(this.format === 'relative' && diffHours <= this.relmax) {
    this.printDate = dateHandler.fromNow();
  } else {
    this.printDate = dateHandler.format(this.format);
  }
  this.fullDate = dateHandler.format('LLLL');
  console.log('datetime', this);

  this.on('mount', () => {

  });
}

riot.tag('datetime', ComponentTemplate, ComponentController);
