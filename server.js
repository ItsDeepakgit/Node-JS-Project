var http = require ('http');
//core module
http.createServer(function(req, res){
res.writeHead(200,{'Content-Type':'text/html'});
res.end("Hey <br/> Deepak! ");
}).listen(3000);//method

console.log("Server is Listening on http://127.0.0.1:3000");