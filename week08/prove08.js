const http = require('http');



function onRequest(req, res) {
   console.log("received a request for: " + req.url);
   
   lines = req.url.toString().split('/');
  
   // numbers = lines[2].toString().split('+')
   // var num1 = parseInt(numbers[0])
   // var num2 = parseInt(numbers[1])
   // ar sum = num1 + num2

   message = JSON.stringify({"name": "Davi", "class":"cs313"});

   if(lines[1] == "home") {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>Hello Davi</h1>");
      res.end();
   } else if (lines[1] == "getData") {
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(message);
      res.end();
   } 
    else if (lines[1] == "add") {
      numbers = lines[2];
      total = 0;

      for (var i = 0 ; i < numbers.length; i++) {
         console.log("number:", numbers[i]);
         num = parseInt(numbers[i]);
         total += num;
      }
      console.log("total: ", total);
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("Your total is: "+ total);
      res.end();
   } else if (lines[0] == "/assignments") {
      res.writeHead(301, ('https://stormy-mesa-22236.herokuapp.com/'));
      res.end();
   } else {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write("<h1>Sorry! Page not found</h1>");
      res.end();
   } 
}

var server = http.createServer(onRequest);
server.listen(8888);

console.log("The server is listening on port 8888...");