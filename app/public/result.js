
$(document).ready(function () {
  console.log("ready to get result");


  $.get('/api/result', '', function (best_match) {
     console.log("ZZZZ result in iget function " + JSON.stringify(best_match));
     $("#name").text(best_match.name);
     console.log("jquery2");
     $("#picture").html('<img src="' + best_match.pic + '" alt="Friend"> ');
  }, 'json');


});



