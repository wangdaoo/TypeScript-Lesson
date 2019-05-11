// !枚举

enum Sex {
	MALE,
	FEMALE,
	UNKNOWN
}

let member_sex: Sex = Sex.FEMALE
console.log(member_sex)
console.log(Sex[member_sex])

// !定义一个函数
function checkSex(sex: Sex) {
	let result: string = ''
	switch (sex) {
		case Sex.MALE:
			result = '男'
			break;
		case Sex.FEMALE:
			result = '女'
			break;
		case Sex.UNKNOWN:
			result = '位置'
			break;
	}
	return result
}
console.log(checkSex(member_sex))