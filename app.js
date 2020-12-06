const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  res.send('initial page');
});

// 404 page
app.use((req, res) => {
    res.status(404).send('404');
});