// =========================================
// SERVER.JS FOR FRIENDS FINDER
// VIRGILIO CANTU
// 11/21/19
// =========================================

// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv").config();

// Create an Express server
var app = express();
// Sets an initi]al port
var PORT = process.env.EXPRESSPORT || 3000;

// Sets up the Express app to handle data parsing / MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));
// Point to the route files
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
