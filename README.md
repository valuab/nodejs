<!--
 * @Author: YJ
 * @Date: 2020-11-25 10:18:12
 * @
# Description: 
-->
# nodejs
学习 nodejs

### commonJS 规范
    1. 引入模块 require 引入其他规则
    2. 支持拓展名 js、json、node 拓展名，不写依次尝试
    3. 不写路径默认为 build-in 或者各级 node_modules 内第三方模块
    4. module 被加载的时候执行,加载后缓存

### global 全局对象
    1. CommonJS
    2. Buffer 二进制数据流、 process、 console

### process <= global 进程
    1. 全局对象
    2. 可以 const process = require('process');
    3. 事件系统:
       1. 
## 调试 
    1. node --inspect-brk 01_run.js 可在浏览器打开调试