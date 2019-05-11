/**
 * !驼峰命名
 */
let MyName: string = 'Mars'
console.log('My name is: ' + MyName)

let MyAge: number = 23
console.warn('My Age is: ' + MyAge)
// MyAge = 'Mars'		// !类型不匹配，编译错误

// ! any 类型，忽略编译类型检查
let myLang: any = 'TypeScript'
console.log(myLang)
// !不推荐使用 any类型
myLang = 25
console.error(myLang)