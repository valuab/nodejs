/*
 * @Author: YJ
 * @Date: 2020-12-11 17:36:47
 * @
# Description: 删除文件夹 rmdir
 */

 const fs = require('fs')

 fs.rmdir('./test',(err)=>{
  if(err)throw err
 })
 fs.rmdirSync//同步
