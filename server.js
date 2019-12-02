// =========================================
// SERVER.JS FOR FRIENDS FINDER
// VIRGILIO CANTU
// 11/21/19
// =========================================

// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const path = require("path");

// Call the module for floating windows
//const jsFrame = new JSFrame();

// Create an Express server
var app = express();
// Sets an initi]al port
var PORT = process.env.EXPRESSPORT || 3000;

// Sets up the Express app to handle data parsing / MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Point to the route files
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Added to define the static dir
app.use(express.static(path.join(__dirname, '/public')));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
