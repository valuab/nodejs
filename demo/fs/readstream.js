/*
 * @Author: YJ
 * @Date: 2020-12-14 14:55:14
 * @
# Description: 文件读取流
 * @FilePath: \nodejs\demo\fs\readstream.js
 */
const fs = require('fs')

const rs = fs.createReadStream('./readstream.js')

rs.pipe(process.stdout) //输出到控制台//读取当前文件