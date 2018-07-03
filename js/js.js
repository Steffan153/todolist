$(document).ready(function() {
  $('#add').click(function() {
    var taskToAdd = $('#task').val();
    var tasks     = $('#tasks');
    $('#tasks').append('<li><span class="task">' + taskToAdd + '</span> &nbsp; &nbsp; <a href="javascript:void(0);" onclick="$(this).parent().hide()"><span class="fa fa-trash"></span></a><a href="javascript:void(0);" onclick="$(this).prev(\'.task=\').html(prompt(\'What is the new name?\'));"><span class="mode_edit"></span></a></li>');
  });
});
