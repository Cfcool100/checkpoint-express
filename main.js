const express = require('express');
const AppAvailability = require('./middleware');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(AppAvailability);

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/services', (req, res) => {
  res.render('service');
});
app.get('/contacts', (req, res) => {
  res.render('contact');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});