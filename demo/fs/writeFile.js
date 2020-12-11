/*
 * @Author: YJ
 * @Date: 2020-12-11 11:30:03
 * @
# Description:
 */
/**
 * 写入文件
 */
const fs = require('fs')

fs.writeFile('./text/newFile.json',`{"name":"YJ"}`,{
  encoding:'utf8',//编码方式
},(err)=>{
  if(err) throw err

  console.log('done');
})

const content = Buffer.from(`{"name":"YJ-bzz"}`)
fs.writeFile('./text/newFile.json',content,(err)=>{
  if(err) throw err

  console.log('done');
})

fs.writeFileSync//同步