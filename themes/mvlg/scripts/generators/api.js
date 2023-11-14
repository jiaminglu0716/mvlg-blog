/* global hexo */

// register for data api

const fs = require('fs');
const path = require('path');

// fs.existsSync(path.join(hexo.source_dir, '404.html'))

const data_dir = path.join(hexo.source_dir, 'data');
const gamer_dir = path.join(data_dir, 'gamer');

hexo.extend.generator.register('_s', function(locals) {

  return {
    path  : 's/index.html', 
    data: {
      t: fs.readFileSync(path.join(gamer_dir, 'psvgames.tsv'))
    },
    layout: 'test'
  };
});

