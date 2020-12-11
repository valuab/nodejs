/*
 * @Author: YJ
 * @Date: 2020-12-11 15:01:55
 * @
# Description: 重命名
 */
const fs = require('fs')

// 给文件重新命名
fs.rename('./text/newFile','./text/newFile.txt',(err)=>{
  if(err)throw err
})
fs.renameSync//同步