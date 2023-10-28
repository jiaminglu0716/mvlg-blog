/* global hexo */

'use strict';

const fs = require('fs');
const path = require('path');

// 页面布局生成器，适用于 hexo new 指令

// generate 404 page
if (!fs.existsSync(path.join(hexo.source_dir, '404.html'))) {
  hexo.extend.generator.register('_404', function(locals) {
    if (this.theme.config.page404.enable !== false) {
      return {
        path  : '404.html',
        data  : locals.theme,
        layout: '404'
      };
    }
  });
}

// generate tags Page
hexo.extend.generator.register('_tags', function(locals) {
  if (this.theme.config.tag.enable !== false) {
    return {
      path  : 'tags/index.html',
      data  : locals.theme,
      layout: 'tags'
    };
  }
});

// generate categories Page
hexo.extend.generator.register('_categories', function(locals) {
  if (this.theme.config.category.enable !== false) {
    return {
      path  : 'categories/index.html',
      data  : locals.theme,
      layout: 'categories'
    };
  }
});

// generate links page
hexo.extend.generator.register('_links', function(locals) {
  if (this.theme.config.links.enable !== false) {
    return {
      path  : 'links/index.html',
      data  : locals.theme,
      layout: 'links'
    };
  }
});

/**
 * 页面路由注册
 * - page 路由地址
 * - data 传递数据
 * - layout 主题布局模板
 */
hexo.extend.generator.register('_test', function(locals) {
  if (this.theme.config.pageTest.enable !== false) {
    console.log(Object.keys(this))
    return {
      path  : 'test/index.html', 
      data  : locals.theme,
      layout: 'test'
    };
  }
});

hexo.extend.generator.register('_posts', function(locals) {
  if (this.theme.config.pageTest.enable !== false) {
    // console.log(Object.keys(locals.all_posts))
    // console.log(locals.all_posts.data[0].slug)
    return {
      path  : 'posts/index.html', 
      layout: 'posts'
    };
  }
});

hexo.extend.generator.register('_postsc', function(locals) {
  // console.log(Object.keys(locals.all_posts))
  // console.log(locals.all_posts.data[0].slug)
  return {
    path  : 'c/index.html', 
    layout: 'postsc'
  };
});