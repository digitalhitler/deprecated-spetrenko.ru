/**
* @Author: Sergey S Petrenko <getrix>
* @Date:   2016-05-24T05:39:03+03:00
* @Email:  spetrenko@me.com
* @Project: spetrenko.ru
* @Last modified by:   getrix
* @Last modified time: 2016-05-24T19:55:50+03:00
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

const debug = require('debug')('app:components:reader');

const ComponentTemplate =
`
<article id="Reader">
  <div class="head">
    <h1>tit: { title }</h1>
  </div>
  <virtual each="{ categories }">
    <badge addr="{ addr }" label="{ label }" class="title-tag"></badge>
  </virtual>
</article>
`;

const ComponentController = function(opts) {
  'use strict';

  debug('Initializing Reader:\n', opts, this);

  this.on('mount', () => {
    $('#stickyHeader').addClass(opts.extendHeaderWith);
    debug('Reader has mount.');
  });
}

riot.tag('reader', ComponentTemplate, ComponentController);
