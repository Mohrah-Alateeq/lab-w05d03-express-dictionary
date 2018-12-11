var express = require('express');
var app = express();
var port = 3000;

// mustache config
var mustache = require('mustache-express');
var termsController = require('./controllers/termsController');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//app.use(termsController);

app.get('/',function(request,response){
response.render('./index')
})
app.use('/term',termsController)

app.get('/term',function(request,response){

  response.render('/index')
})


// body parser config
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// logger config 
var logger = require('morgan');
app.use(logger('dev'));

// method override config 
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.listen(port, function(){
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
})