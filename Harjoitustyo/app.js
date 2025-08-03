var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// Reitit
var opiskelijaRouter = require('./routes/opiskelija');
var arviointiRouter = require('./routes/arviointi');
var opintojaksoRouter = require('./routes/opintojakso');
var suoritusRouter = require('./routes/suoritus');


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
app.use('/opiskelija', opiskelijaRouter);
app.use('/arviointi', arviointiRouter);
app.use('/opintojakso', opintojaksoRouter);
app.use('/suoritus', suoritusRouter);

module.exports = app;