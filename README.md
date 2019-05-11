# TypeScript

目前的`TypeScript`是越来越火热了！ 作为程序员，我们一定要跟上时代的脚步(哼，是很累)

`TypeScript`是一种由微软开发的自由和开源的编程语言。它是`JavaScript`的一个严格超集，并添加了可选的静态类型和基于类的面向对象编程。C#的首席架构师以及Delphi和Turbo Pascal的创始人安德斯·海尔斯伯格参与了`TypeScript`的开发。[4][5][6][7]

`TypeScript`设计目标是开发大型应用，然后转译成JavaScript。[8]由于`TypeScript`是JavaScript的严格超集，任何现有的`JavaScript`程序都是合法的`TypeScript`程序。

`TypeScript`支持为现存`JavaScript`库添加类型信息的定义文件，方便其他程序像使用静态类型的值一样使用现有库中的值。当前有第三方提供常用库如`jQuery`、`MongoDB`、`Node.js`和`D3.js`的定义文件。

`TypeScript`编译器本身也是用`TypeScript`编写，并被转译为`JavaScript`，以`Apache` License 2发布。

## ts 变量类型

- number: 数值类型
- string: 字符串
- boolean: 布尔类型
- symbol: 符号类型，标识唯一对象
- any: 任意类型
- object: 对象类型（数组，元组，类，接口，函数等）

## var 和 let 的区别

- 限定变量的作用范围
- 防止变量被重复定义

## 常量保存不变值

- const

数组比较特殊，常量定义的数组，地址不可以被改变。但是数组里面的内容可以改变

```ts
const data:number[] = [100,200,300]
console.table(data)

data[0] = 10
data[1] = 20
data[2] = 30

console.table(data)
```

### 常量用处

- 系统配置文件路径
- 数据库连接串
- ...

## 数组的使用

- 数组的定义
  - `let name: type[] = [1,2,3]`
- 数组的使用

## 多维数组

- 多维数组的定义
- 多维数组的使用

```ts
let name:type[][] = [[], [], [], ...]
// ?这是个二维数组
```

## 枚举类型

枚举类型是每种编程语言中都支持的变量类型，它可以增加代码的可读性

- 枚举类型的定义
- 枚举类型的使用

```ts
enum name {
	name1,
	name2,
	name3,
	...
}
```

## 联合类型

联合类型是指可以包含多种类型的变量类型，在实际项目中其实不常用

- 联合类型的定义
- 联合类型的使用

```ts
let data: type1|type2|type3| ...
```

## null 空检查

空检查用于代码编译时对程序内的变量做 null 空检查，避免业务级别的错误

- null 赋值代码
- tsc 和 tscconfig.json的用法

```ts
let data1: string = undefined
let data2: string = null
let data3: string = ''
data3 = null
```

## 第三方库的使用

- node 库准备
- 类型定义文件(tsd)导入
- ts 编码使用 js 第三方库

### typescript的使用方法

tsd: 描述node第三方库,专门为ts使用的库文件

1. 找到 tsd 文件
2. 导入 tsd 文件
3. 编写代码
4. 编译运行

调用第三方库文件

[TS库文件: https://microsoft.github.io/TypeSearch/](https://microsoft.github.io/TypeSearch/)

例如:

导入 `request`

```js
npm init
// 初始化库文件

npm install --save request
导入 request 文件
```

**注意了**

在 `TS` 中导入第三方库的时候,并不是说只需要导入 ts 提供的第三方库文件就行! 必须要导入相对应的第三方库才可以!

而且, 在执行的时候,要将执行的 `js` 文件放在导入库的项目中(*就是有 package.json 和 node_modules 的那个项目中*)

## 箭头函数

- 箭头函数的定义
- 箭头函数的使用

## 可省略参数

- 定义可省略参数的函数
- 定义符号: ?

## 参数72变

- 定义参数个数不定的函数
- 定义符号:  `...`

## 类的定义与使用

- 类的定义
- 类的使用

### 类的定义(模板)

```ts
class name {
	property_name1: type
	property_name2: type
	// ...

	// 构造函数
	constructor (param1: type, param2: type, ...) {
		// 构造函数内容
	}

	// 类方法
	method1 (param1: type, param2: type, ...):return {
		// 函数方法
	}
	// method2, method3, ...
}
```