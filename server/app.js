var express = require('express');
var path = require('path');
var logger = require('morgan');

var gameRouter = require('./routes/game');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/game', gameRouter);

module.exports = app;
