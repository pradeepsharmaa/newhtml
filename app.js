'use strict';

var express = require('express');
var app = express();


// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.

app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/views');
app.use('/', express.static('build/'));



//app.set('views', __dirname + '/views/components');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

// Dummy users
var users = [
  { name: 'tobi', email: 'tobi@learnboost.com' }
];

app.get('/', function(req, res){
  res.render('pages/index', {
    title: "Pages Listing"
  });
});

app.get('/homepage', function(req, res){
    res.render('pages/homepage', {
      title: "Home Page"
    });
  });

  app.get('/searchresult', function(req, res){
    res.render('pages/searchresult', {
      title: "Search Result Page"
    });
  });


  app.get('/steps', function(req, res){
    res.render('pages/steps', {
      title: "Steps"
    });
  });


app.listen(3000);
console.log('Express app started on port %d', 3000);