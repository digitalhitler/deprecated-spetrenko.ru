import riot from 'riot';

const ComponentTemplate =
`
<div class="sp-listview">

</div>
`;

const debug = require('debug')('app:components:listview');

const ComponentController = function(opts) {
  'use strict';

  this.on('mount', () => {
    debug('ListView mounted');
  });

  this.on('update', (data) => {
    debug('ListView going to be updated:', data);
  });
}

riot.tag('listview', ComponentTemplate, ComponentController);
