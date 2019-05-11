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
function add2(...vans: number[]): number {
	let result = 0
	for (const van of vans) {
		result += van
	}
	return result
}
console.log(add2(1, 2, 3, 4, 5, 6))