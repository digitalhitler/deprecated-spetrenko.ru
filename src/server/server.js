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
 * spetrenko.ru - my sweety personal pet-project sources                      *
 * https://github.com/digitalhitler/spetrenko.ru                              *
 *                                                                            *
 * Copyright © 1992-2016 Sergey Petrenko                                      *
 * This file may be the part of sp.ru source code.                            *
 *                                                                            *
 * This software is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/. In either words, you can do anything except any kind of commercial purposes without a permission of author.
 *                                                                            *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *                                                                            *
 *  © Sergey Petrenko <spetrenko@me.com>                                      *
 ******************************************************************************/

'use strict';

// @todo: see README.md Hipsting section.
// require('@risingstack/trace');

global.App = require('./components/app');
global.App.database = require('./providers/database');
global.App.vk       = require('./providers/vk');
const Hapi = require('hapi');
console.log(global.App);

const server = new Hapi.Server();
server.connection(
  {
    port: 9998,
    routes: { cors: false}
  }
);

require('./routes/mountAll')(server);

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
