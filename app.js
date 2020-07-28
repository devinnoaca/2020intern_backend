const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./API/user');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', user);

app.listen(3000, function() {
    console.log('3000 Port running');
})