/*
 * @Author: YJ
 * @Date: 2020-12-04 15:43:00
 * @
# Description: 
 */
const {
    basename,
    dirname,
    extname
} = require('path')

const url = './join.js'

console.log(basename(url)); //文件名
console.log(dirname('../path/join.js')); // 目录名
console.log(extname(url)); //拓展名