/*
 * @Author: YJ
 * @Date: 2020-12-11 17:43:42
 * @
# Description: watch 监视一个文件变化
 */
const fs = require('fs')

fs.watch('./',{
  recursive:true,//监视子文件
},(eventType,fileName)=>{
  console.log(eventType);//操作类型
  console.log(fileName);//更改的文件名
})