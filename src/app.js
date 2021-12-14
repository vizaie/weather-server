const path = require('path');
const express = require('express');

const hbs = require('hbs');

console.log(path.join(__dirname, '../'));

const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);

app.use(express.static(publicDirectoryPath));
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Vijay Kanth',
    temparature: '30',
    feels_like: '35',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    helpText: 'This is some helpful text',
    name: 'Vijay Kanth',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    name: 'Vijay Kanth',
  });
});

app.get('/help/*', (req, res) => {
  res.render('page_404', {
    title: 'Help is not available for this item',
    name: 'Vijay Kanth',
  });
});

app.get('*', (req, res) => {
  res.render('page_404', {
    title: '404',
    name: 'Vijay Kanth',
  });
});

app.listen('3000', () => {
  console.log('listening on port 3000');
});
