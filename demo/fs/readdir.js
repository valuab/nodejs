/*
 * @Author: YJ
 * @Date: 2020-12-11 17:32:40
 * @
# Description: 读取文件夹 readdir 输出文件夹下文件名称
 */
const fs = require('fs')

fs.readdir('../',(err,data)=>{
  if(err)throw err
  console.log(data);
})
fs.readdirSync//同步