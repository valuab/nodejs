/*
 * @Author: YJ
 * @Date: 2020-12-07 10:46:52
 * @
# Description: 
 */
const EventEmitter = require('events');
const { setTimeout } = require('timers');

// 继承
class CustomEvent extends EventEmitter{

}

const event1 = new CustomEvent()

event1.on('test',()=>{
    console.log('this is a event');
})

setTimeout(()=>{
    event1.emit('a') //触发绑定事件
    event1.emit('test') //触发绑定事件
},500)

setInterval(()=>{
    event1.emit('test') //触发绑定事件
},1000)