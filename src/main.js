"use strict";
exports.__esModule = true;
var express = require("express");
var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;
var app = express();
app.get('/', function (req, res) {
    console.log(req);
    res.send('Well done!');
});
app.listen(PORT, function () {
    console.log('The application is listening on port 3000!');
});
