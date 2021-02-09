const express = require('express');
const path = require('path');
// const pug = require('pug');
const app = express()
const port = 3000;

app.set('view engine', 'pug');
app.locals.basedir = path.join(__dirname, 'views');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

//get day
var d = new Date();
today = d.getDay();

//get hour

var hourNow = d.getHours();
// console.log(hourNow);


if ((today <6 && today>0) && (hourNow<17 && hourNow>9) ) {
  app.get('/', (req, res) => {
  res.status(200).render('index');
});
app.get('/service', (req, res) => {
  res.status(200).render('service');
});
app.get('/contact', (req, res) => {
  res.status(200).render('contact');
});}
else{
  app.get('/', (req, res) => {
    res.status(200).render('off');
  });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})