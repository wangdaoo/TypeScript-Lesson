"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
request('http://api.komavideo.com/news/list', function (error, response, body) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(body);
    }
});
