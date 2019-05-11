"use strict";
// !可省略的参数
// ?通过给 name 后面加上 ? , 达到可给函数传空的效果
// function sayHello(name?: string): string {
// 	if (name === undefined) {
// 		return "Hello Mars!"
// 	} else {
// 		return "Hello " + name + "!"
// 	}
// }
// ?通过函数加上默认值,达到传空的目的
function sayHello(name) {
    if (name === void 0) { name = 'Mars'; }
    return "Hello " + name + "!";
}
console.warn(sayHello("Trump"));
// Hello Trump
console.error(sayHello());
// Hello Mars
