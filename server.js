var express = require('express'),
 app = express();

 app.use(express.static(__dirname+'/public'))
 .get('*', function(req, res){
 res.sendFile('/public/index.html', {root:__dirname});
 }).listen(3000);
