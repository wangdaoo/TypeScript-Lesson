"use strict";
// !类的使用
var Person = /** @class */ (function () {
    function Person(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    Person.prototype.syaHello = function () {
        console.log(this.name + ", \u4F60\u597D!" + ("\u4F60\u662F\u4E2A\u771F" + this.sex + "\u4EBA"));
    };
    return Person;
}());
var mars = new Person('Mars Wong', '男', 23);
mars.syaHello();
