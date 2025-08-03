var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// Reitit
var bookRouter = require('./routes/book');
var borrowerRouter = require('./routes/borrower');

var app = express();

// Middlewaret
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(cors());

// Reitittien liittäminen
app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);

module.exports = app;