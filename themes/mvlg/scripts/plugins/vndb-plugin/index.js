const { default: axios } = require("axios");
const request = axios.request;


const O = (path) => 'https://vndb.org' + path;
const API = {
  WEB: {
    RANDOM: O('/v/rand'),
    VN: (id) => O('/v/' + id)
  }
}


// async function vn(id) {
//   return request({
//     method: 'post',
//     url: 'https://api.vndb.org/kana/vn',
//     data: {
//       "filters": ["and"
//       , ["id","=",id]
//       , ["lang","=","ja"]],
//       "fields": "title, image.url, length_minutes, length_votes"
//     }
//   }).then(res => res.data);
// }

// async function random() {
//   return request({
//     method: 'get',
//     url: API.WEB.RANDOM
//   }).then(res => res.request.res.responseUrl.replace('https://vndb.org/', ''));
// }


// async function randomTimes(number, filters={}) {
//   let urls = new Set();
//   let results = new Array();

//   for (let i = 0; i < number; i++) {
//     urls.add(await random());
//   }
//   for (let url of urls.values()) {
//     results.push(await vn(url));
//   }
//   return results;
// }


// randomTimes(1).then(r => console.log(r[0].results))




function random() {
  return request({
    method: 'post',
    url: 'https://api.vndb.org/kana/vn',
    data: {
      "sort": "id",
      "reverse": true,

      // "filters": ["and"
      //   , [ "lang", "=", "ja" ]
      //   , [ "id", ">=", "v1" ]
      // ],
      // "fields": "title",
      "results": 1
    }
  }).then(r => console.log(r.data));
}
random()