"use strict";
/**
 * !驼峰命名
 */
var MyName = 'Mars';
console.log('My name is: ' + MyName);
var MyAge = 23;
console.warn('My Age is: ' + MyAge);
// MyAge = 'Mars'		// !类型不匹配，编译错误
// ! any 类型，忽略编译类型检查
var myLang = 'TypeScript';
console.log(myLang);
// !不推荐使用 any类型
myLang = 25;
console.error(myLang);
