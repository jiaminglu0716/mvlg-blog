const { default: axios } = require("axios");
const request = axios

// 测试，仅能作为服务端方法在模板进行数据处理，前台脚本调用不能
// 前端不能调用目前的数据是问题之一
// 通过路由进行异步数据回传，不能直接使用模板对异步数据干涉

function test() {
  return request.get(url='https://www.bilibili.com').then(response => {
    return response
  })
}

function bangumiTimeline() {
  // 只显示本周（近邻数据不显示）
  return request.get(url='https://api.bilibili.com/pgc/web/timeline?types=1&before=6&after=6').then(response => {
    return response.data.result.slice(3, 10)
  })
}



module.exports = {
  test,
  bangumiTimeline
}