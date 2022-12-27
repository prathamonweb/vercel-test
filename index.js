const express = require('express')
const bodyParser=require('body-parser')
const PORT = 4000
const app = express()

let homeContent= 'lorem';

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get('/', (req, res) => {
  res.render('home' ,{homeContent:homeContent})
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
  })
  
// Export the Express API
module.exports = app