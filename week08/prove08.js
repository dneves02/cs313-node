const http = require('http')


function onRequest(req, res) {
   console.log("received a request for: " + req.url)

   lines = req.url.toString().split('/')
   message = toString({"name": "Davi", "class":"cs313"})

   if(req.url == "/home") {
      res.writeHead(200, {"Content-Type": "text/html"})
      res.write("<h1>Hello Davi</h1>")
      res.end()
   } else if (req.url == "/getData") {
      res.writeHead(200, {"Content-Type": "application/json"})
      res.write(message)
      res.end()
   } else {
      res.writeHead(404, {"Content-Type": "text/html"})
      res.end()
   }
   
   
   
}

var server = http.createServer(onRequest)
server.listen(8888)

console.log("The server is listening on port 8888...")