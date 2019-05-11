"use strict";
// !类的使用
var Person = /** @class */ (function () {
    function Person(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    Person.prototype.syaHello = function () {
        console.log(this.name + ", \u4F60\u597D!");
    };
    return Person;
}());
var mars = new Person('帆哥', true, 23);
mars.syaHello();
