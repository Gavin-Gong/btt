const axios = require("axios")
const iconv = require('iconv-lite');

axios.get("https://hq.sinajs.cn/list=sh000001", {
  responseType: "arraybuffer"
}).then(res => {
  const data = iconv.decode(res.data, 'GB18030')
  const match = data.match(/"(.+)"/);
  if(match[1]) {
    let dataArr = match[1].split(",")
    const open = dataArr[1]
    const prevClose = dataArr[2]
    const close = dataArr[3]
    const percent = ((close - prevClose) / prevClose * 100).toFixed(2)
    console.log(`${Number(close).toFixed(0)}   ${percent}%${percent < 0 ? "▼" : "▲"}`)
  }
})
