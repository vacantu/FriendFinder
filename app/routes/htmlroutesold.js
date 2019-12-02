
var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // This is needed for my stylesheet to work
  app.get("/styles.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/styles.css"));
  });
  // Fofr the background to display
  app.get("/bg.jpg", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bg.jpg"));
  });
};

//so we can push it