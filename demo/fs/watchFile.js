/*
 * @Author: YJ
 * @Date: 2020-12-11 17:50:12
 * @
# Description: 监视文件变化 //删除 //重命名
 */
const fs = require('fs')

fs.watchFile('./watchFile',{
  bigint:false,
  persistent:false,//指示当文件正在被监视时，进程是否应该继续运行
  interval:500
},(curr,prev)=>{
  console.log(curr);
  console.log(prev);
})


fs.watchFileSync//同步