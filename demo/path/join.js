/*
 * @Author: YJ
 * @Date: 2020-12-03 16:42:00
 * @
# Description: 
 */
const {join} = require('path') // 拼接 // 

console.log(join('/use','local','bin')); // \use\local\bin
console.log(join('/use','../local','bin/')); // \local\bin\