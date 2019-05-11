// !get set 方法

class DatabaseAll {
	private dbName: string

	constructor(dbName: string) {
		this.dbName = dbName
	}

	// ?通过 name 属性可以获取到 private 中的私有属性
	public get name(): string {
		return this.dbName
	}

	// ?给 私有属性 赋值 set

	public set name(v: string) {
		this.dbName = v;
	}
}

const db = new DatabaseAll("mySql is very nice");
console.warn(db.name)

db.name = 'mongoDB is so cool!'
console.log(db.name)