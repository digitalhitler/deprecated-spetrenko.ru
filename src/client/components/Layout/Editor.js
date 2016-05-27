import riot from 'riot';

const ComponentTemplate =
`
<div style="border:10px red solid;padding: 30px;">
  <listview></listview>
</div>
`;

const ComponentController = function(opts) {
  'use strict';

  this.on('mount', () => {

  });
}

riot.tag('layout-editor', ComponentTemplate, ComponentController);
