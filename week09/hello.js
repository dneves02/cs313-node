const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello Davi!')
})

app.get('/home', function(req, res) {
  console.log('Hello Davi! Going to your home page');
  var name = getUser();
  var emailAddess = "dneves@zeeksgeeks.com";

  var params= {username: name, email: emailAddess};
  res.render("home", params)
})

function getUser(){
  return "Davi";
}

app.get('/mortgage', function(req, res) {
  console.log('Hello! Enter a number')
  res.render("mortgage")
})

app.get('/hello.html', (req, res) => {
  
  res.send('Hello Davi!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})