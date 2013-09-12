
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./controllers');
var user = require('./controllers/user');
var templates = require('./controllers/templates');
var shapes = require('./controllers/shapes');

var http = require('http');
var path = require('path');

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public'1)));
app.use(express.static(path.join(__dirname, 'webapp')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login',user.auth);

app.get('/templates/new',templates.new);
app.get('/shape/create',shapes.create);
app.get('/shape/list',shapes.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
