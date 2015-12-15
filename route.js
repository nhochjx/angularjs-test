var express = require('express');
var Route = express();

Route.get('/', function(req, res, next){
    res.json({
        status: 'ok',
        mess: 'Done',
    });
});

Route.get('/test', function(req, res, next){
    res.end('Test data');
});

// Coment
Route.get('/git', function(req, res, next){
    res.end('Hello git');
});

module.exports = function(app){
    app.use(Route);
    console.log('test');
};