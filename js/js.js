$('#add').click(function() {
  var taskToAdd = $('#task').val(),
      tasks     = $('#tasks');
  $('#tasks').append('<li>' + taskToAdd + '</li>');
});
