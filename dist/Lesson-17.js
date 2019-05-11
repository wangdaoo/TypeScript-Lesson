"use strict";
var dataBase = /** @class */ (function () {
    function dataBase() {
    }
    /**
     * connect
     */
    dataBase.connect = function () {
        console.log(this.dbName + ' ===> 连接中...');
    };
    /**
     * showDB
     */
    dataBase.prototype.showDB = function () {
        console.error('Hi My name is Mars Wong!');
    };
    return dataBase;
}());
dataBase.dbName = 'type=mySql;ip=192.168.0.1;uid:admin;pwd:123456';
console.info(dataBase.dbName);
dataBase.connect();
