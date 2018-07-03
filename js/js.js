$(document).ready(function() {
  $('#add').click(function() {
    var taskToAdd = $('#task').val();
    var tasks     = $('#tasks');
    $('#tasks').append('<li>' + taskToAdd + '</li> &nbsp; &nbsp; <a href="javascript:void(0);" onclick="$(this).parent().hide()">&#xe020;</a>');
  });
});
