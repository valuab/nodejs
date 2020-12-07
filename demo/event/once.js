/*
 * @Author: YJ
 * @Date: 2020-12-07 11:02:07
 * @
# Description: 
 */
// 事件触发一次

const EventEmitter = require('events')

class CustomEvent extends EventEmitter{}

const event = new CustomEvent();

event.once('test',()=>{
    console.log('test event');
})

setInterval(()=>{
    event.emit('test')
},500)