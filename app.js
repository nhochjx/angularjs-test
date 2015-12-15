var express = require('express');
var app = express();

app.get('/xinchao', function(req, res, mext){
    res.end('Hello word');
});

var port = app.get('port') || 3000;
app.listen(port, function(){
    console.log('App listening on port: ', port);
})