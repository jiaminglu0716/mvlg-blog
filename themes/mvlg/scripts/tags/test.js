/* global hexo */
'use strict';

const { COMPONENT, MarkdownTextLoader } = require("../utils/data2md");

const note = (args, content) => {
  if (!args || !args[0]) {
    args = ['default'];
  }
  
  // 解析文本并提取数据
  let lines = content.split('\n');
  // 数据转换为md组件存取
  content = new MarkdownTextLoader()
    .add(COMPONENT.table(['id', 'name'], [[1, 'A'], [2, 'B'], [3, 'C']]))
    .add(COMPONENT.ol(['Hello', 'Pig', 'DDD']))
    .add(COMPONENT.table(['id', 'name'], [[1, 'A'], [2, 'B'], [3, 'C']]))
    .load()

  return `<div class="note note-${args.join(' ')}">
            ${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}
          </div>`;
};

/*
  {% test class %}
  text
  {% endtest %}
 */
hexo.extend.tag.register('test', note, { ends: true });
