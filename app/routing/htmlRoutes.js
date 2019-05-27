var path = require("path");


module.exports = function(app) {

  app.get('/', (req, res) => {
    console.log(path.join(__dirname + '../public/home.html'));
    res.sendFile(path.join(__dirname + './../public/home.html'));
    //res.status(200).json({ message: 'Connected!' });
  });


  //app.get("/", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/home.html"));
  //});

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/result", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/result.html"));
  });
};
