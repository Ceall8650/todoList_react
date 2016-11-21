var express = require("express");
var app = express();
var port = process.env.PORT || '6688'

console.log(process.env.PORT);

app.get("/", function(req, res){
	res.send('Hello World')
})

app.listen(80, function(){
	console.log('listening 80 port');
});

