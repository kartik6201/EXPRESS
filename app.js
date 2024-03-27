const express = require('express');
const path = require('path');

const app = express();

// Set Handlebars as the view engine
app.set('view engine', 'hbs');
console.log(path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

app.get('/page1', (req, res) => {
    res.render('page1', { title: 'Page 1' });
});

app.get('/page2', (req, res) => {
    res.render('page2', { title: 'Page 2' });
});

app.get('/page3', (req, res) => {
    res.render('page3', { title: 'Page 3' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});