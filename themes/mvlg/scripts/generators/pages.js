/* global hexo */

'use strict';

const fs = require('fs');
const path = require('path');
const pagination = require('hexo-pagination');

// page router -> /xxx access the template we set 

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

// generate about Page
hexo.extend.generator.register('_about', function(locals) {
  if (this.theme.config.category.enable !== false) {
    return {
      path  : 'about/index.html',
      data  : locals.theme,
      layout: 'about'
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

// generate shoplinks page
hexo.extend.generator.register('_shoplinks', function(locals) {
  if (this.theme.config.links.enable !== false) {
    return {
      path  : 'shoplinks/index.html',
      data  : locals.theme,
      layout: 'shoplinks'
    };
  }
});

// generate acglinks page
hexo.extend.generator.register('_acglinks', function(locals) {
  if (this.theme.config.links.enable !== false) {
    return {
      path  : 'acglinks/index.html',
      data  : locals.theme,
      layout: 'acglinks'
    };
  }
});

/**
 * 3rd-extend func
 */
hexo.extend.generator.register('_gamer', async function(locals) {
  if (this.theme.config.gamer.enable !== false) {
    return {
      path  : 'gamer/index.html', 
      layout: 'gamer'
    };
  }
});



/**
 * 页面路由注册
 * - path 路由地址
 * - data 传递数据(模板数据 | 纯数据)
 * - layout 主题布局模板(无模板则默认纯数据)
 */

// hexo.extend.generator.register('_test', async function(locals) {
//   return {
//     path  : 'test/index.html', 
//     data  : {},
//     layout: 'test'
//   };
// });

// hexo.extend.generator.register('_test', async function(locals) {
//   if (this.theme.config.pageTest.enable !== false) {
//     // console.log(Object.keys(this))
//     // console.log(await hexo.extend.helper.get('bilibili')())

//     const { bangumiTimeline } = require('../api/bilibili')
//     return {
//       path  : 'test/index.html', 
//       data  : {
//         data: await bangumiTimeline()
//       },
//       layout: 'test'
//     };
//   }
// });

// hexo.extend.generator.register('_posts', function(locals) {
//   if (this.theme.config.pageTest.enable !== false) {
//     // console.log(Object.keys(locals.all_posts))
//     // console.log(locals.all_posts.data[0].slug)
//     return {
//       path  : 'posts/index.html', 
//       layout: 'posts'
//     };
//   }
// });

// hexo.extend.generator.register('_postsc', function(locals) {
//   // console.log(locals.posts.data[0].title);
//   // const posts = [];
//   // locals.posts.map(post => {
//   //   if (post.title.indexOf('【教程】') > -1) 
//   //     posts.push(post)
//   // })
//   return pagination('_c/index.html', locals.posts, {
//     perPage: 10,
//     layout: 'postsc',
//     data: {
//       title: 'postcc'
//     }
//   });
// });