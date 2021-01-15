var http = require('http');
var url = require('url');
var fs = require('fs');
const { deepStrictEqual } = require('assert');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url != '/favicon.ico') {
    var urlObj = url.parse(req.url, true);
    var data = urlObj.query;
    var txt = "name: " + data.name + "<br/>" + "subject: " + data.subject + "<br/>" + "score: " + data.score;

    fs.writeFile('hello.htm', txt, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
        res.end(txt);
    }
    }).listen(3333);
console.log("http://localhost:3333");