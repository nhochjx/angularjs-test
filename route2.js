var express = require('express');
var Route = express();

Route.get('/hehe', function(req, res, next){
    res.end('Route 2');
});

module.exports = function(app){
    app.use(Route);
};