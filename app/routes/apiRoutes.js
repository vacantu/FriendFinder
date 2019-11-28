// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends-data.
// ===============================================================================

var friendsData = require("../data/friends");
//var surveyData = require("../data/survey");


module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body); 
  });
}

