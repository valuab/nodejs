/*
 * @Author: YJ
 * @Date: 2020-12-14 15:42:37
 * @
# Description: promise 解决回调地狱
 * @FilePath: \nodejs\demo\fs\promisify.js
 */
const fs = require('fs')

// 异步模块

const promisify = require('util').promisify;

const read = promisify(fs.readFile)

// promise写法
// read('./promisify.js').then(data => {
//   console.log(data.toString());
// }).catch(ex => {
//   console.log(ex.toString());
// })

async function test() {
  try {
    const content = await read('./promisify.js')
    console.log(content.toString());
  } catch (error) {
    console.log(error);
  }
}

test()