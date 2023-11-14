/* global hexo */

'use strict';

// 基于Hexo生命周期钩子进行库引入事件挂载
hexo.on('generateBefore', () => {
  require('./lib/merge-configs')(hexo);
  require('./lib/compatible-configs')(hexo);
  require('./lib/injects')(hexo);
  require('./lib/highlight')(hexo);
  require('./lib/lazyload')(hexo);
  require('./lib/footnote')(hexo);
});

hexo.on('generateAfter', () => {
  require('./lib/hello')(hexo);
});
