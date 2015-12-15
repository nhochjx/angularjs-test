var express = require('express');
var app = express();

require('./route.js')(app);
require('./route2.js')(app);

app.get('/xinchao', function(req, res, mext){
    res.end('Hello word');
});

var port = app.get('port') || 3000;
app.listen(port, function(){
    console.log('App listening on port: ', port);
})