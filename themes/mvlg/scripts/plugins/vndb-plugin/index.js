const { default: axios } = require("axios");
const request = axios.request;


/**
 * API DOC
 * https://api.vndb.org/kana
 */

class VNDB {
  static url = 'https://vndb.org';
  static randlink = this.url + '/v/rand';
  static vnlink(id) {
    return this.url + '/v/' + id;
  }

  /**
   * api-v2-kana
   * @returns VNDBKana
   */
  static kana() {
    return new VNDBKana();
  }
}

class VNDBKana {
  static api = 'https://api.vndb.org/kana';
  static path(path) {
    return this.api + path;
  }
  // 官方接口，但是随机不成功
  async random() {
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
    });
  }
  // 官方Web随机重定向接口（仅单次发送）
  // async randomV1() {
  //   return request({
  //     method: 'get',
  //     url: API.WEB.RANDOM
  //   }).then(res => res.request.res.responseUrl.replace('https://vndb.org/', ''));
  // }
  /**
   * 内容接口
   */
  async vn(id) {
    return request({
      method: 'post',
      url: VNDBKana.path('/vn'),
      data: {
        "filters": ["and"
        , ["id","=",id]
        , ["lang","=","ja"]],
        "fields": "title, image.url, length_minutes, length_votes"
      }
    });
  }
}


class VNDBV2 extends VNDBKana {};

/**
 * Test
 */
// VNDB.kana().vn(10087).then(res => res.data).then(console.log)

module.exports = {
  VNDB,
  VNDBV2,
  VNDBKana
}