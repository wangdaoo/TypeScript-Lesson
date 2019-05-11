// !类的使用

class Person {
	name: string
	sex: string
	age: number

	constructor(name: string, sex: string, age: number) {
		this.name = name
		this.sex = sex
		this.age = age
	}

	syaHello() {
		console.log(`${this.name}, 你好!` + `你是个真${this.sex}人`)
	}
}

const mars = new Person('Mars Wong', '男', 23);
mars.syaHello()