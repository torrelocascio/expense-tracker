var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var cors = require('cors')

var appRoutes = require('./routes/app');
var customerRoutes = require('./routes/customers');
var projectRoutes = require('./routes/projects');
var expenseRoutes = require('./routes/expenses');


var app = express(); 
mongoose.connect('mongodb://torrelocascio3:password@ds111430.mlab.com:11430/expense-tracker'); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
//     next();
// });


app.use(
    cors({
      credentials: true,                 // allow other domains to send cookies
      origin: ["http://localhost:4200"]  // these are the domains that are allowed
    })
  );


app.use('/expense', expenseRoutes)
app.use('/project', projectRoutes)
app.use('/customer', customerRoutes)
app.use('/', appRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
