"use strict";
// !箭头函数
// ?普通函数
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(10, 10));
// ?箭头函数
var func_addNumber = function (x, y) {
    return x + y;
};
console.log(func_addNumber(100, 100));
