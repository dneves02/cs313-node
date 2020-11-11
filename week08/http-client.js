var http = require('http')

function sayHello(req, res) {
   console.log("received a request for: " + req.url)

   res.write("Hello Davi")
   res.end()
}

var server = http.createServer(sayHello)
server.listen(5000)

console.log("The server is listening on port 5000...")