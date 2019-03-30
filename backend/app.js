const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./controller/routes');

const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors('*'));
app.use('/default', routes);
app.use(express.static('uploads'));

mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('mongo started');
    }
});

app.listen(3000, (err) => {
    if (!err) {
        console.log('Server runninng on 3000');
    }
});


module.exports = app;
