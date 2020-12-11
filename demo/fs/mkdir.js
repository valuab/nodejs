/*
 * @Author: YJ
 * @Date: 2020-12-11 17:35:03
 * @
# Description: 创建文件夹 mkdir 重复创建报错
 */
const fs = require('fs')

fs.mkdir('test',err=>{
  if(err)throw err
})

fs.mkdirSync//同步