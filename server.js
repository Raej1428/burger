var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();

// enable ssl redirect
app.use(sslRedirect());

var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the appliburgerion directory.
app.use(express.static("public"));

// Parse appliburgerion body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

// Timeout
app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}