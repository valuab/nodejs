/*
 * @Author: YJ
 * @Date: 2020-12-07 16:22:45
 * @
# Description: 文件写入流
 * @FilePath: \nodejs\demo\fs\writeStream.js
 */
const fs= require('fs')

const ws = fs.createWriteStream('./text/test.txt')

const tid = setInterval(()=>{
  const num = parseInt(Math.random() * 10)

  if(num<7){
    ws.write(num.toString())
    console.log(num);
  }else{
    clearInterval(tid)
    ws.end()
  }
},200)

// 结束监听
ws.on('finish',()=>{
  console.log('done!');
})