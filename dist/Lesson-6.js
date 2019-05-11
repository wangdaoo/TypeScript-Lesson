"use strict";
// !枚举
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["UNKNOWN"] = 2] = "UNKNOWN";
})(Sex || (Sex = {}));
var member_sex = Sex.FEMALE;
console.log(member_sex);
console.log(Sex[member_sex]);
// !定义一个函数
function checkSex(sex) {
    var result = '';
    switch (sex) {
        case Sex.MALE:
            result = '男';
            break;
        case Sex.FEMALE:
            result = '女';
            break;
        case Sex.UNKNOWN:
            result = '位置';
            break;
    }
    return result;
}
console.log(checkSex(member_sex));
