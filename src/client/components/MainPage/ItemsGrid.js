/**
* @Author: Sergey S Petrenko <digitalhitler>
* @Date:   2016-05-24T04:59:35+03:00
* @Email:  spetrenko@me.com
* @Project: spetrenko.ru
* @Last modified by:   getrix
* @Last modified time: 2016-05-24T20:20:06+03:00
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
import Bricklayer from 'bricklayer';
let bl = null;

const gridTemplate =
`
<div class="items-grid bricklayer" id="items-grid-list">
  <virtual each="{ items }">
    <div>
      <items-grid-card values="{ this }"></items-grid-card>
    </div>
  </virtual>
</div>
`;

const gridController = function(opts) {
  'use strict'
  this.items = this.opts.items;
  this.on('mount', () => {
    console.warn('Mount!', bl);
    bl = new Bricklayer(document.querySelector('#items-grid-list'));
  });
  this.on('unmount', () => {
    console.error('unmo', bl);
    //bl.destroy();
  });
}

riot.tag('items-grid', gridTemplate, gridController);
