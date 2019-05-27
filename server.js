

var express = require("express");

var app = express();
const path = require("path");
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static("./app/public"));
app.use('/app/public/',express.static(path.join(__dirname, './app/public')));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
/* old to be deleted 
const express = require('express');
const app = express();
const path = require("path");
const routes_html = require('./app/routing/htmlRoutes');
const routes_api = require('./app/routing/apiRoutes');


//  Connect all our routes to our application
app.use('/app/public/',express.static(path.join(__dirname, './app/public')))
//app.use(express.const path = require("path");static('./app/public'));
app.use('/', routes_html);
app.use('/api', routes_api);
// Turn on that server!
app.listen(3000, () => {
  console.log('App listening on port 3000');
}); */