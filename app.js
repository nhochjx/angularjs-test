var express = require('express');
var app = express();

require('./route.js')(app);
require('./route2.js')(app);

var port = app.get('port') || 8000;
app.listen(port, function(){
    console.log('App listening on port: ', port);
})