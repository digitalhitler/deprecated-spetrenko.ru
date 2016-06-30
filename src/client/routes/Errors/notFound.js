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

import riot from 'riot';
import Route from '../Route.class';

let notFoundErrorRoute = new Route({
  displayName: "errorNotFound"
});

notFoundErrorRoute.pageSchema = "cs-dark";

notFoundErrorRoute.handler = (context, next) => {
  riot.mount('#PageContainer', 'raw', {
    content: 'Something goes wrong'
  });
};

export default notFoundErrorRoute;