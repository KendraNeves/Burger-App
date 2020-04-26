$(document).ready(function() {

//Event when "submit" button is pressed with new input in form   
$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
    burger_name: $("#ca").val().trim()
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});


//Event when "devour" button is clicked
$(".devour").click(function() {
  alert("Good Job!");
});

});