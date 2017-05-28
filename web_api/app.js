const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const users = require('./routes/users');
const memos = require('./routes/memos');

mongoose.connect('mongodb://localhost/web_api');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/users', users);
app.use('/memos', memos);

app.listen(3000, () => console.log("Listening on port 3000"));
