// toggle add todo div
$("#addTodoToggle").click(function () {
  $("#addTodo").slideToggle();
  if ($("#addTodoToggle").html() == "Add Todo") {
    $("#addTodoToggle").html("Hide");
  } else {
    $("#addTodoToggle").html("Add Todo");
  }
});

// add todo
$("#createTodo").on("click", function () {
  if ($("#newTodo").val()) {
    const newTodoName = $("#newTodo").val();
    $("ul").prepend(
      "<li><div class='flex-row'><p>" +
        newTodoName +
        "</p><i class='fa fa-remove cross'></i></div></li>"
    );
    $("#newTodo").val(""); // reset input box
  }
});

// delete todo
$(".fa-remove").on("click", function () {
  console.log($(this).parent());
  console.log("called");
  $(this)
    .parent()
    .fadeOut(300, function () {
      $(this).parent().remove();
    });
});
