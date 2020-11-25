/*
 * @Author: YJ
 * @Date: 2020-11-25 14:25:06
 * @
# Description: 
 */
/**
 *  argv 常用参数
 *  argv0 常用参数
 *  execArgv 常用参数
 *  execPath 常用参数
 */
const {
    argv,
    argv0,
    execArgv,
    execPath
} = process

argv.forEach(item => {
    console.log(item)
    // D:\Software\code\nodejs\node.exe
    // E:\project\study\study\nodejs\demo\10_process.js
})

//  --test 传入参数 如： a=1,b=2 输出 a=1 b=2

console.log(argv0); // D:\Software\code\nodejs\node.exe

console.log(execArgv); // []

console.log(execPath); // D:\Software\code\nodejs\node.exe