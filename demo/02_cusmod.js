/*
 * @Author: YJ
 * @Date: 2020-11-25 10:54:20
 * @
# Description: 
 */
console.log('this is a module')

const testNum = 100

function test(){
    console.log(testNum)
}

module.exports.testNum = testNum
module.exports.textfn = test