/* global hexo */

// register for data api

hexo.extend.generator.register('_s', function(locals) {
  return {
    path  : 's/index.html', 
    data: {
      a: 'a'
    }
  };
});

