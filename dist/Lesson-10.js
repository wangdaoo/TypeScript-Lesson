"use strict";
// !函数的使用
function addNum(x, y) {
    return x + y;
}
console.log(addNum(5, 10));
function multiply(x, y) {
    return x * y;
}
console.log(multiply(5, 10));
var func_addNum = addNum;
var func_mul = multiply;
console.log(func_addNum(10, 100));
console.log(func_mul(10, 100));
