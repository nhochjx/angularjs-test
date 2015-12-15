var express = require('express');
var app = express();

require('./route.js')(app);

var port = app.get('port') || 3000;
app.listen(port, function(){
    console.log('App listening on port: ', port);
})