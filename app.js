var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const express = require('express');
const checkLoggedIn = require('./middlewares/checkLoggedIn');


// Importe as rotas
const indexRouter = require('./routes/index');
const simuleRouter = require('./routes/simule');
const usersRouter = require('./routes/usersRouter');
const noticiasRouter = require('./routes/noticias');
const contatoRouter = require('./routes/contato.routes');
const authRoutes = require('./routes/authRoutes');
const searchRoutes = require('./routes/searchRoutes');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(flash());
app.use(checkLoggedIn);

// Use as rotas
app.use('/', simuleRouter);
app.use('/', indexRouter);
app.use('/', authRoutes);
app.use('/', searchRoutes);
app.use('/usuarios', usersRouter);
app.use('/contato', contatoRouter);
app.use('/noticias', noticiasRouter);



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

