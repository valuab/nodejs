/*
 * @Author: YJ
 * @Date: 2020-11-25 11:41:16
 * @
# Description: 
 */
// 引入第三方 系统内部模块
const fs = require('fs') //操作文件系统 //操作二进制流

fs.readFile('./06_fs.js', (err, data) => {
    console.log(err) //null
    console.log(data) //buffer 十六进制字节 需转换
    console.log(data.toString()) //buffer 十六进制字节 需转换
})