/*
 * @Author: YJ
 * @Date: 2020-12-14 17:32:55
 * @
# Description: 
 * @FilePath: \nodejs\anydoor\.eslintrc.js
 */
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true,
        "es2021": true,
        // browser - 浏览器环境中的全局变量。
        // node - Node.js 全局变量和 Node.js 作用域。
        // commonjs - CommonJS 全局变量和 CommonJS 作用域(用于 Browserify / WebPack 打包的只在浏览器中运行的代码)。
        // shared - node - browser - Node.js 和 Browser 通用全局变量。
        // es6 - 启用除了 modules 以外的所有 ECMAScript 6 特性（ 该选项会自动设置 ecmaVersion 解析器选项为 6）。
        // worker - Web Workers 全局变量。
        // amd - 将 require() 和 define() 定义为像 amd 一样的全局变量。
        // mocha - 添加所有的 Mocha 测试全局变量。
        // jasmine - 添加所有的 Jasmine 版本 1.3 和 2.0 的测试全局变量。
        // jest - Jest 全局变量。
        // phantomjs - PhantomJS 全局变量。
        // protractor - Protractor 全局变量。
        // qunit - QUnit 全局变量。
        // jquery - jQuery 全局变量。
        // prototypejs - Prototype.js 全局变量。
        // shelljs - ShellJS 全局变量。
        // meteor - Meteor 全局变量。
        // mongo - MongoDB 全局变量。
        // applescript - AppleScript 全局变量。
        // nashorn - Java 8 Nashorn 全局变量。
        // serviceworker - Service Worker 全局变量。
        // atomtest - Atom 测试全局变量。
        // embertest - Ember 测试全局变量。
        // webextensions - WebExtensions 全局变量。
        // greasemonkey - GreaseMonkey 全局变量。
    },
    // 全局变量的写入设置
    "globals": {
        // "var1": "writable",
        // "var2": "readonly"
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    // eslink 规则配置
    "rules": {
        "no-console": ["error", {
            "allow": ["warn", "error", "info"]
        }]
    }
};