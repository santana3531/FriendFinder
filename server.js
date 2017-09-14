// server.js file, require packages.

var express = require("express");
var bodyParser = require("body-parser");


var app = express();

var PORT = process.env.PORT || 3000;

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

// bodyParse the following:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// start server
app.listen(PORT, function() {
    console.log("Working on PORT: " + PORT);
});