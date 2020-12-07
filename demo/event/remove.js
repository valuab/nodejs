/*
 * @Author: YJ
 * @Date: 2020-12-07 11:08:59
 * @
# Description: 
 */
// 移除绑定事件

const EventEmitter = require('events')

class CustomEvent extends EventEmitter {}

const event = new CustomEvent();

function fn1() {
    console.log('fn1');
}

function fn2() {
    console.log('fn2');
}

function fn3() {
    console.log('fn3');
}

event.on('test', fn1)
event.on('test', fn2)

setInterval(() => {
    event.emit('test')
}, 500)

// 移除
setTimeout(() => {
    event.removeListener('test', fn2) //删除单个绑定监听事件
    event.on('test', fn3)
}, 1500)

setTimeout(() => {
    event.removeAllListeners('test') //删除所有绑定监听事件
}, 5500)
