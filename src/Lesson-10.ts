// !函数的使用
function addNum(x: number, y: number) {
	return x + y
}
console.log(addNum(5, 10))

function multiply(x: number, y: number) {
	return x * y
}
console.log(multiply(5, 10))

let func_addNum = addNum
let func_mul = multiply
console.log(func_addNum(10, 100))
console.log(func_mul(10, 100))