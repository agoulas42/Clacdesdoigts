var http = require('https');
var server = http.createServer();

server.on("request", function(request,response) {
    request.on("data",function(chunk){
        console.log("le serveur a recu :", + chunk); 
    }); 
    response.end();
});

server.listen(3000);
