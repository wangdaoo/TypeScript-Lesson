let dataArr: number[][] = [
	[1, 2, 3, 4],
	[10, 20, 30, 40],
	[100, 200, 300, 400]
]

console.table(dataArr)
console.log(dataArr[0][1])

let dataArrData: any[][][] = [
	[
		[1, 2, 3, 4],
		[200, 300, 400]
	],
	[
		['mars', 'wong', 'NB'],
		['js', 'ts', 'NB']
	]
]

console.table(dataArrData)
console.table(dataArrData[1][1][1])