// !类的使用

class Person {
	name: string
	sex: boolean
	age: number

	constructor(name: string, sex: boolean, age: number) {
		this.name = name
		this.sex = sex
		this.age = age
	}

	syaHello() {
		console.log(`${this.name}, 你好!`)
	}
}

const mars = new Person('帆哥', true, 23);
mars.syaHello()