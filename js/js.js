$('#add').click(function() {
  var taskToAdd = $('#task').val();
  var tasks     = $('#tasks');
  $('#tasks').append('<li>' + taskToAdd + '</li>');
});
