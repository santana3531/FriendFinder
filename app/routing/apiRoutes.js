// link the homies!

var homies = require("../data/homies");

module.exports = function(app) { // now get routes
  app.get("/api/homies", function(req, res) {
    res.json(homies);
    });

// now post routes
app.post("/api/homies", function(req, res) {
    
    // get the best matches to find a new homie

  var newBff = {
    name: "",
    photo: "",
    bffPts: 1000
  };

// // post/parse the submitted homie 
  var homieData = req.body;
  var homieScores = homieData.pts;
  var totalPts = 0;

  // write for loop to run through all the homies in database
  for (var i = 0; i < homies.length; i++) {
    console.log(homies[i].name);
    totalPts = 0;
  
 // then for loop of all the points of da homies
    for (var j = 0; j < homies[i].pts[j]; j++) {

    ///  then calculate the points
    totalPts += Math.abs(parseInt(homieScores[j]) - parseInt(homies[i].pts[j]));
   
   if (totalPts <= newBff.bffPts) {
    newBff.name = homies[i].name;
    newBff.photo = homies[i].photo;
    newBff.bffPts = totalPts;
  }   
 }
}
// save the homie's into the homie's DB
  homies.push(homieData);

  res.json(newBff);

});
};
