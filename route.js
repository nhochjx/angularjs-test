var express = require('express');
var Route = express();

Route.get('/', function(req, res, next){
    res.json({
        status: 'ok',
        mess: 'Done',
    });
});

module.exports = function(app){
    app.use(Route);
};