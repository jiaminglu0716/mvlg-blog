const { default: axios } = require("axios");
const request = axios;

hexo.extend.generator.register('_s', function(locals) {

  console.log()
  return {
    path  : 's/index.html', 
    data: {

    },
    layout: 'test'
  };
});