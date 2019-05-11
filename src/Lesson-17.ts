class dataBase {
	constructor() {
	}

	public static dbName: string

	/**
	 * connect
	 */
	public static connect() {
		console.log(this.dbName + ' ===> 连接中...')
	}

	/**
	 * showDB
	 */
	public showDB() {
		console.error('Hi My name is Mars Wong!')
	}
}

dataBase.dbName = 'type=mySql;ip=192.168.0.1;uid:admin;pwd:123456'
console.info(dataBase.dbName)
dataBase.connect()