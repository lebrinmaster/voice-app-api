const express = require('express');
const mongoose = require('mongoose');
const testRoutes = require('./routes/test.routes');

// express app
const app = express();

const dbURI = 'mongodb+srv://lebrinmaster:2610164z@cluster0.h4rw5.mongodb.net/voice-app?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.warn(err));

app.get('/', (req, res) => {
  res.redirect('/test');
});

app.use('/test', testRoutes);

// 404 page
app.use((req, res, next) => {
    console.log('middleware');
    next();
});
  
app.use((req, res) => {
    console.log('in the next middleware');
    res.status(404).send('404');
});

