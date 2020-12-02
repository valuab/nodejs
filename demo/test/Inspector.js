/*
 * @Author: YJ
 * @Date: 2020-11-30 16:47:55
 * @
# Description: 
 */
function test(){
    const a = parseInt(Math.random() * 10) 
    const b = parseInt(Math.random() * 10) 

    const c = test2(a,b)
}

function test2(a,b){
    if(a>b){
        a += a* 2
    }else{
        b -= a;
    }

    return a + b
}


test()

// node --inspect-brk inspector.js
// 一般会打开浏览器调试 edge F12 有node 入口 
// 可以打断点