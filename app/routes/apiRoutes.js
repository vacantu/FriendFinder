var friendsData = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
    compareScores();
    //console.log("REQ: ",req.body);
  });
  function compareScores() {
    // FOR EACH OF ALL FRIENDS AND DOING THE MATH
    // KEEP THE BEST ONE IN MEMORY AND SUBSITUTE FOR THE NEXT BEST ONE
    // WHEN THE FOR EACH IS FINISHED, DISPLAY THE NAME AND THE PHOTO
    // IN A NEW WINDOW. I MAY NEED ANOTHER VIEW.
    // CLEAN THE CURRENT FRIENDS FILE TO INCLUDE ONLY URLS.
  }

};

