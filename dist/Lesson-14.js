"use strict";
// !类的使用
var Person = /** @class */ (function () {
    function Person(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    Person.prototype.syaHello = function () {
        console.log(this.name + ", \u4F60\u597D!" + ("\u4F60\u662F\u4E2A\u771F" + this.sex + "\u4EBA") + (this.age + "\u5C81,\u771F\u662F\u5927\u597D\u5E74\u534E.\u5343\u4E07\u522B\u8F9C\u8D1F!!!"));
    };
    return Person;
}());
var mars = new Person('Mars Wong', '男', 23);
mars.syaHello();
