/*
 * @Author: YJ
 * @Date: 2020-12-11 14:42:40
 * @
# Description: 文件信息
 */
const fs = require('fs')

fs.stat('./text/file.txt','UTF8',(err,data)=>{
  if(err){
    console.log('文件不存咋');
    return
  }
  console.log(data); //文件信息
  console.log(data.isFile());//文件  
  console.log(data.isDirectory());//文件夹
})
fs.statSync//同步