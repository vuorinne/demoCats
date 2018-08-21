
/// startpoint on /bin/www, joka kutsuu tätä modulia    --- pitäiskö tämän nimeksi panna server.js ???

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var config = require('./config/config');   // use your own config file (for server port and mongoDB connection)

//Set up mongoose connection
var mongoose = require('mongoose');
/*
var mongoDB = 'mongodb://localhost:27017/catsdb';
mongoose.connect(mongoDB);
*/
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var indexRouter = require('./routes/index');
var demoRouter = require('./routes/demo');


// Express server start
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use('/', indexRouter);
app.use('/demo', demoRouter);

// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
