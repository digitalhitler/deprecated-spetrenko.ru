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

let readMainRoute = new Route({
  displayName: "readMain"
});

readMainRoute.pageSchema = "cs-inverse";

readMainRoute.loader = (context, next) => {
  console.log("Loading...", context);
  setTimeout(() => {
    console.info("Rendering...");
    next();
  }, 2500);
};
readMainRoute.handler = (context, next) => {
  console.log("I Was here");
  riot.mount('#PageContainer', 'raw', {
    content: 'Something goes good'
  });
};

export default readMainRoute;