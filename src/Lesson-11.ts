// !箭头函数

// ?普通函数
function addNumber(x: number, y: number) {
	return x + y
}
console.log(addNumber(10, 10))

// ?箭头函数
let func_addNumber = (x: number, y: number): number => {
	return x + y
}
console.log(func_addNumber(100, 100))