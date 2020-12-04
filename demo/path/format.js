/*
 * @Author: YJ
 * @Date: 2020-12-04 16:56:16
 * @
# Description: 
 */
const {format,parse} = require('path')

const url = '../path/join.js'

const copy = parse(url)

console.log(format(copy)); //反向合并路径
console.log(parse(url)); //解析路径
