// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
//var Book = require("../models/book.js");

var friends = require("../data/friends")

//function best_score(my_name, my_answers,friends) {
function best_score(my_answers) {
  let minx = 1000;
  let lowest_index;
  console.log('bestscore')
  // map people to get the math.abs diff of answers, pull it out, then sum the diff
  // the lowest score is the closest match , there has to be a simpler way!
  let score_one = (a1, a2) => a1.map((x, i) => [Math.abs(a1[i] - a2[i])])
    .reduce((acc, val) => acc.concat(val), [])
    .reduce((a, b) => a + b);
  for (x in friends) {
    // Evidence it is working:
    console.log(x + " " + score_one(my_answers, friends[x].answers));
    if (minx > score_one(my_answers, friends[x].answers)) {
      lowest_index = x;
      minx = score_one(my_answers, friends[x].answers, friends);
    }
  }
  return lowest_index;
}

// Routes
// =============================================================
module.exports = function (app) {


  app.get('/api/friends', (req, res) => {
    res.json(friends);
  });

  app.get("/api/friends/:answerlist", function (req, res) {
    res.json(friends);

  });

  app.get("/api/result", function (req, res) {
    ///here is where i pass the result back
    let best = best_score(req.query.my_answers);
    res.json(friends[best]);

  });

  app.post('/api/add', (req, res) => {
    friends.push(req.body);
    res.status(200).json({ message: 'apiConnected!' });
  });
};
