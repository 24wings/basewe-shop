"use strict";
exports.__esModule = true;
var num = (2.45462442);
console.log(num.toFixed(2));
var str = '请访问 www.baidu.com';
var phone = '13419597065';
console.log(str.repeat(5));
var regexArr = str.match(/.{1,}\..{1,}\..{1,}/g);
var url = 'http://www.baidu.com';
console.log(regexArr);
var padResult = str.padEnd(100, 's');
console.log(str, padResult);
console.log(str.search(/www/));
console.log(phone.slice(phone.length - 4, phone.length));
if (url.startsWith('https')) {
    console.log("https get");
}
else {
    console.log("http get");
}
// date
var now = new Date();
var createDt = new Date(2018, 3, 16, 20);
var result = (new Date(createDt.getTime() + 24 * 60 * 60 * 1000).getTime() - now.getTime());
var lessTime = new Date(result);
console.log(now instanceof Date);
console.log(lessTime.getHours(), lessTime.getMinutes());
console.log(now.toLocaleDateString());
console.log(now.getMonth());
now.setMonth(4);
console.log(now.toLocaleDateString());
var o = {
    name: '张啊',
    age: 23
};
console.log(o.hasOwnProperty('person'));
console.log(o.toString());
console.log(o);
console.log(Object);
for (var key in o) {
    console.log(key);
}
o.area = '北京';
console.log(o);
var o2;
