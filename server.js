var express = require('express'),
    app = express(),
    port = 8080;

app.use(express.static('public'));

app.listen(port, function(){
  console.log('Magic happens at port: ' + port);
});
