"use strict";
var data = ['C', 'JavaScript', 'TypeScript'];
console.table(data);
console.log(data[0]);
console.warn(data[3]); // ?undefined
// !追加赋值
data[3] = 'Python';
console.table(data);
console.warn(data[3]);
// !越界赋值
data[10] = 'Go';
console.log(data);
console.warn(data[10]);
