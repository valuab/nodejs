/*
 * @Author: YJ
 * @Date: 2020-11-25 11:11:57
 * @
# Description: 
 */
module.exports.test = 'b'

const modA = require('./05_modA')
console.log('modA:',modA.test)

module.exports.test = 'BB'