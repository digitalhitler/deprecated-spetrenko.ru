/**
* @Author: Sergey S Petrenko <digitalhitler>
* @Date:   2016-05-24T02:57:13+03:00
* @Email:  spetrenko@me.com
* @Project: spetrenko.ru
* @Last modified by:   digitalhitler
* @Last modified time: 2016-05-24T05:02:48+03:00
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

const spinnerTemplate =
`
<div class="loader" style="position: fixed; top: 0; left: 0;
z-index:1001" hidden>Loading...</div>
`;

const spinnerController = function(opts) {
  'use strict';
  console.log('spinner with ', opts);
}

riot.tag('spinner', spinnerTemplate, spinnerController);
