const express = require('express')
const path= require('path');
const app = express()
const port = 8080

//config view engine
app.set('views',path.join(__dirname ,'views')) // specify the views directory
app.set('view engine', 'ejs') // register the template engine

//khai bao router
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test', (req, res) => {
  // res.send('<h1> tesst s</h1>')
   res.render('sample.ejs')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})