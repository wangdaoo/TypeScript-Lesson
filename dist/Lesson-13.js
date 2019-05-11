"use strict";
// // !普通函数定义
// function add(vans: number[]): number {
// 	let result = 0
// 	for (let val of vans) {
// 		result += val
// 	}
// 	return result
// }
// console.table(add([1, 2, 3, 4, 5]))
// !参数可变长函数定义
function add2() {
    var vans = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vans[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, vans_1 = vans; _a < vans_1.length; _a++) {
        var van = vans_1[_a];
        result += van;
    }
    return result;
}
console.log(add2(1, 2, 3, 4, 5, 6));
