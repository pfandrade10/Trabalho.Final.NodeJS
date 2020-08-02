require('./database/index');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const passport = require('passport');
const pageNotFound = require('./utils').pageNotFound;
const ErrorHandler = require('./utils').ErrorHandler;

const indexRouter = require('./routes/api/index');
const usersRouter = require('./routes/api/user');
const usersFrontRouter = require('./routes/ui/user');
const listsFrontRouter = require('./routes/ui/list');
const listsRouter = require('./routes/api/list');
const tasksRouter = require('./routes/api/task');

//rotas de Login pelo github
const logoutRouter = require('./routes/auth/logout');
const githubRouter = require('./routes/auth/github');

const app = express();
require('./config/github.strategy');

// // view engine setup
// console.log(__dirname)
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Set passport configs
app.use(require('express-session')({ secret: 'shhhh...', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersFrontRouter);
app.use('/lists', listsFrontRouter);
app.use('/api/users', usersRouter);
app.use('/api/lists', listsRouter);
app.use('/api/tasks', tasksRouter);

//rotas de Login pelo github
app.use('/logout', logoutRouter);
app.use('/auth/github', githubRouter);

app.use(pageNotFound);
app.use(ErrorHandler);


module.exports = app;