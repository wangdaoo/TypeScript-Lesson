"use strict";
// !类的访问限制
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Database = /** @class */ (function () {
    function Database(dbName) {
        this.dbName = dbName;
    }
    /**
     * ?外部调用
     * ?showDbName
     */
    Database.prototype.showDbName = function () {
        console.log("\u6570\u636E\u5E93: " + this.dbName);
    };
    // !本类及子类调用
    Database.prototype.connect = function () {
        console.warn("" + this.dbName, '连接中...');
    };
    // !本类调用
    Database.prototype.disconnect = function () {
        console.error("" + this.dbName, '关闭');
    };
    return Database;
}());
var oracle = new Database('Oracle甲骨文');
oracle.showDbName();
// oracle.connect()
// ?属性“connect”受保护，只能在类“Database”及其子类中访问。
// oracle.disconnect()
// ?属性“disconnect”为私有属性，只能在类“Database”中访问。
// !生成一个子类
var postGreSql = /** @class */ (function (_super) {
    __extends(postGreSql, _super);
    function postGreSql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * daIt
     */
    postGreSql.prototype.daIt = function () {
        _super.prototype.connect.call(this);
        // super.disconnect()
        // ?属性“disconnect”为私有属性，只能在类“Database”中访问。
    };
    return postGreSql;
}(Database));
var postGreg = new postGreSql('postGreSql小象');
postGreg.showDbName();
postGreg.daIt();
