// !类的访问限制

class Database {
	dbName: string

	constructor(dbName: string) {
		this.dbName = dbName
	}

	/**
	 * ?外部调用
	 * ?showDbName
	 */
	public showDbName() {
		console.log(`数据库: ${this.dbName}`)
	}

	// !本类及子类调用
	protected connect() {
		console.warn(`${this.dbName}`, '连接中...')
	}

	// !本类调用
	private disconnect() {
		console.error(`${this.dbName}`, '关闭')
	}
}

const oracle = new Database('Oracle甲骨文');
oracle.showDbName()
// oracle.connect()
// ?属性“connect”受保护，只能在类“Database”及其子类中访问。
// oracle.disconnect()
// ?属性“disconnect”为私有属性，只能在类“Database”中访问。

// !生成一个子类
class postGreSql extends Database {
	/**
	 * daIt
	 */
	public daIt() {
		super.connect()
		// super.disconnect()
		// ?属性“disconnect”为私有属性，只能在类“Database”中访问。
	}
}

const postGreg = new postGreSql('postGreSql小象')
postGreg.showDbName()
postGreg.daIt()