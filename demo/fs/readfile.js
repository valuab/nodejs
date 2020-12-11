/*
 * @Author: YJ
 * @Date: 2020-12-07 12:00:47
 * @
# Description: 读取文件
 */
const fs = require('fs')

// 默认异步
const fileName1 = fs.readFile('./text/file.txt','UTF8',(err,data)=>{
  if(err) throw err;

  console.log(data);// Buffer 对象
})

const fileName2 = fs.readFileSync('./text/file.json','UTF8')
console.log(fileName2);

// 长文件过大读取可以一步步走