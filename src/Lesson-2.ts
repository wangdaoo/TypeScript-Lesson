if (true) {
	var myName: string = 'Mars'
}
console.error(`Hello ${myName}`)
/**
 * !使用 var 的时候，外部可以使用私有代码块的声明变量
 * ?而 使用 let 的时候，外部不可以访问内部代码块的声明变量
 */

if (true) {
	let myAge: number = 23
	console.log(myAge)
}

var myName: string = 'Mars'
console.error(myName)
var myName: string = 'Wong'
console.error(myName)
/**
 * !使用 var 的时候，同样的变量何以被重复定义
 * ?而使用 let 的时候，则不可以
 */
let myNames: string = 'Mars Wong'
console.log(myNames)
// !同样的变量不可以重复定义，否则会报错
// let myNames: string = 'Wong'
// console.error(myNames)