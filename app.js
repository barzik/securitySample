const createError = require('http-errors');
const express = require('express');
const path = require('path');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const examplesRouter = require('./routes/examples');
const shellInjectionRouter = require('./routes/shellinjection');
const sqlInjectionRouter = require('./routes/sqlinjection');

const validateRouter = require('./routes/validate');


const app = express();

// app.disable('x-powered-by');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/reveal', express.static(__dirname + '/node_modules/reveal.js'));
app.use('/', indexRouter);
app.use('/examples', examplesRouter);
app.use('/shellinjection', shellInjectionRouter);
app.use('/sqlinjection', sqlInjectionRouter);
app.use('/validate', validateRouter);


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
