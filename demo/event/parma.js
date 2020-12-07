/*
 * @Author: YJ
 * @Date: 2020-12-07 10:56:44
 * @
# Description: 
 */
const EventEmitter = require('events');
const {
    setTimeout
} = require('timers');

// 继承
class CustomEvent extends EventEmitter {

}

const event1 = new CustomEvent()

// 出错异常
event1.on('error', (err,time) => {
    console.log(err);
    console.log(time);
})

event1.on('study', () => {
    console.log('ad');
})

event1.emit('error', new Error('oops!'),Date.now())