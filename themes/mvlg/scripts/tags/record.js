/* global hexo */
'use strict';

const { App } = require("../plugins/record-plugin/index");

const note = (args, content) => {
  if (!args || !args[0]) {
    args = ['v2'];
  }
  
  let lines = content.split('\n');
  content = new App(lines).run(args[0]).md();

  return `<div class="note note-default">
            ${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}
          </div>`;
};

hexo.extend.tag.register('record', note, { ends: true });
