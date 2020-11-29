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
  console.log('Hello Davi! Going to your home page')
  res.render("home")
})

app.get('/hello.html', (req, res) => {
  
  res.send('Hello Davi!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})