/*
 * @Author: YJ
 * @Date: 2020-12-02 15:18:09
 * @
# Description: 
 */

function test(n) {
    console.log(n);
}

for (let i = 0; i < 100; i++) {
    const n = parseInt(Math.random() * 10)
    test(n)
}