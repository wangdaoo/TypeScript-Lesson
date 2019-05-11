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