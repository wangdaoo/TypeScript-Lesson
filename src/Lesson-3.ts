const DISTR: string = 'ip=192.168.0.1;port=8080;uid=mars;pwd=123456'

console.log(DISTR)

// !项目中不变的值，最好定义为常量

const DATA: number[] = [100, 200, 300]
console.table(DATA)

DATA[0] = 10
DATA[1] = 20
DATA[2] = 30
DATA[3] = 40

console.table(DATA)