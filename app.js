var express = require('express');
var app = express();

app.get('/', function(req, res, next){
    res.json({
        demo: 'Test',
    });
});

var port = app.get('port') || 3000;
app.listen(port, function(){
    console.log('App listening on port: ', port);
})