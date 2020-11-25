/*
 * @Author: YJ
 * @Date: 2020-11-25 11:11:44
 * @
# Description: 
 */
// module被加载时执行，加载后缓存
// 一旦出现某个模块被循环加载，只输出已经执行的部分，还未执行的部分不会输出

module.exports.test = 'a'

const modB = require('./05_modB')
console.log('modB:',modB.test)

module.exports.test = 'AA'