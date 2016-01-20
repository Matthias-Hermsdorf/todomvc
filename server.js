'use strict';

var express = require('express');
var fs = require('fs');
var learnJson = require('./learn.json');

var app = module.exports = express();
var server = require('http').createServer(app);
var favicon = require('serve-favicon');

server.listen(3005);
console.log("localhost:3005");
app.use(express.static(__dirname));
app.use(favicon(__dirname + '/site-assets/favicon.ico'));

Object.defineProperty(module.exports, 'learnJson', {
	set: function (backend) {
		learnJson.backend = backend;
		fs.writeFile(require.resolve('./learn.json'), JSON.stringify(learnJson, null, 2), function (err) {
			if (err) {
				throw err;
			}
		});
	}
});
