const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/views/gallery.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
  //error ? console.log(error) : console.log('running on 3000');
})