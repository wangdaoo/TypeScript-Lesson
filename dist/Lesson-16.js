"use strict";
// !get set 方法
var DatabaseAll = /** @class */ (function () {
    function DatabaseAll(dbName) {
        this.dbName = dbName;
    }
    Object.defineProperty(DatabaseAll.prototype, "name", {
        // ?通过 name 属性可以获取到 private 中的私有属性
        get: function () {
            return this.dbName;
        },
        // ?给 私有属性 赋值 set
        set: function (v) {
            this.dbName = v;
        },
        enumerable: true,
        configurable: true
    });
    return DatabaseAll;
}());
var db = new DatabaseAll("mySql is very nice");
console.warn(db.name);
db.name = 'mongoDB is so cool!';
console.log(db.name);
