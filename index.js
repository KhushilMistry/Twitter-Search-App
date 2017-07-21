const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const multiparty = require('connect-multiparty');

var app = express();

var router = require('./services/router');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myappdatabase');

// Add headers
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-ACCESS_TOKEN, Access-Control-Allow-Origin, Authorization, Origin, x-requested-with, Content-Type, Content-Range, Content-Disposition, Content-Description");
  next();
});

app.use(morgan('combined'));
app.use(multiparty());
app.use(bodyParser.json());

app.use('/v1', router);

var PORT = process.env.PORT || 3000;

console.log('Listening on: ', PORT);
app.listen(PORT);
