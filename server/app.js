var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var gameRouter = require('./routes/game');

var app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(corsHeaders);

app.use('/game', gameRouter);

function corsHeaders(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

module.exports = app;
