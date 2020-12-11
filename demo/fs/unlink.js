/*
 * @Author: YJ
 * @Date: 2020-12-11 17:30:32
 * @
# Description: unlink 删除文件
 */
const fs = require('fs')

fs.unlink('./text/newFile.txt',(err)=>{
  if(err)throw err
})
fs.unlinkSync//同步