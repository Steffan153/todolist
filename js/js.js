$(document).ready(function() {
  $('#add').click(function() {
    var taskToAdd = $('#task').val();
    var tasks     = $('#tasks');
    $('#tasks').append('<li>' + taskToAdd + ' &nbsp; &nbsp; <a href="javascript:void(0);" onclick="$(this).parent().hide()"><span class="fa fa-trash"></span></a></li>');
  });
});
