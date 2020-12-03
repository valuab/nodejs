const {
    normalize
} = require('path'); //引入模块

// 规范化路径 normalize
console.log(normalize('user//local/bin')); //user\local\bin
console.log(normalize('user//local/../bin')); // user\bin