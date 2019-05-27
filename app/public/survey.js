var user_answers = [];
  let questions = [
       "I love trash!",
       "I love cookies!",
       "Astrology is a valid science",
       "There is scientific evidence of a divine creator",
       "Astrology is a valid science"
  ];

function show_result()
{
  var html_s = 
  `<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

}


function make_question(question, choices) {
  if (typeof make_question.counter == 'undefined')
    make_question.counter = 0;
  let html_s = `<h2>${question}<h2> 
      <div>
      AGREE`;
  for (let q = 0; q < choices; q++) {
    html_s = html_s + `
          <label class="radio-inline">
          <input type="radio" name="quest${make_question.counter}" value="${q}">
          </label>`;
  }
  html_s = html_s + `DISAGREE<br><br>`;
  make_question.counter++;
  return html_s;
}
  let html_s = questions.map(
    function(x) { return make_question(x, 5); }).join("");
  html_s = "<form>" 
      + '<h3>Username:<h3> <input type="text" name="user_name">'
      + '<h3>image: <h3> <input type="text" name="image">'
      + html_s
      + '<input type="submit" width="150px" id="find_friend" value="SUBMIT">'
      + "</form>";
  $("#survey").append(html_s);

function show_match(my_answers) {
  let answers = {"my_answers" : my_answers};

  $.get('/api/result', answers, function (best_match) {
    $("#name").text(best_match.name);
    $("#picture").html('<img src="' + best_match.pic + '" alt="Friend" height="400px" width="400px"> ');
 }, 'json');
      $("#result").modal("show");



}
$(document).ready(function () {

$("#find_friend").on("click", function (event) {
  event.preventDefault();
  var answers = questions.map((currElement, index) => {
    return $('input[name=quest' + index + ']:checked').val();
     });
  var name = $('input[name=user_name]').val();
  var pic = $('input[name=image]').val();
  user_answers = answers;
  var newFriend = {
    name: name.trim(),
    pic: pic.trim(),
    answers: answers
  };
      show_match(newFriend.answers);


});



});
