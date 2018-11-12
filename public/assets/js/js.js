// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $("#order").on("click", function (event) {
    event.preventDefault();
    // var id = $(this).data("id");
    var burgerName = $("#box").val();

    var newBurger = {
      burgername: burgerName,
      devoured: 0
    };

    // Send the Post request to create a burger
    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the Put request to update burger status
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});