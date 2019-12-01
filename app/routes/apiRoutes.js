// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends-data.
// ===============================================================================

var path = require("path");

var friendsData = require("../data/friends");
//var surveyData = require("../data/survey");


module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", (req, res) => {
    res.json(friendsData);
  })

  app.post("/api/friends", (req, res) => {
    var newFriend = req.body;
    var formerRating = 100;
    
    for (var i=1;i<friendsData.length;i++) {
      var name = friendsData[i].name;
      var photo = friendsData[i].photo;
      
      var rating = 0;
      for (var j=0;j<friendsData[i].scores.length;j++) {
        var diff = Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
        rating = rating + diff; 
      }
      if (rating<formerRating) {
        formerRating = rating;
        var name = friendsData[i].name;
        var url = friendsData[i].photo;
      }
    }
    friendsData.push(req.body);
    // Display winner in friend.html page
    console.log("values of name and photo: ",name, photo);
    var friendURL = "/api/friend.html/" + "?name=" + name + "&url=" + photo;
    res.redirect(friendURL);
  })  
  
  app.get("/api/friend.html", (req, res) => {
      console.log(req.query);
      res.sendFile(path.join(__dirname, "../public/friend.html"), {name: req.query.name, url: req.query.url});
    });
}