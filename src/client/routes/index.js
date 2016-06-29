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

import riot from 'riot';
import page from 'page';

import './Main/Main';
import './Read/Main';
import './Errors/NotFound';

function getRouteHandler(route) {
  "use strict";
  return require('./' + route);
}

console.info('Let routing setup!');

page("/", getRouteHandler);
//  // readMainpage:     page("/read/:postId", getRouteHandler("Read/Main")),
//
//   errors: {
//    // notFound: page("*", getRouteHandler("Errors/notFound"))
//   }
// };

console.log(routesList);
console.info('Let routing begin!');
page();

//
// const routesList = {
//   Main: require('./Main/Main.js').default,
//   ReadMain: require('./Read/Main.js').default,
//  // Edit: require('./Edit/Main.js').default
// };
//
// (function() {
//   // console.error(riot);
//   // riot.route.base('#!');
//   // riot.route.start(true);
//   // riot.route('/about', function() {
//   //   'use strict';
//   //   console.info('i am on about');
//   // });
//   //
//   // riot.route('/read/*', RoutesList.Read.Handle);
//   // riot.route('/edit..', RoutesList.Edit.Handle);
//   //
//   //
//   //
//   // riot.route('/', RoutesList.Main.Handle);
// }());

export default true;
