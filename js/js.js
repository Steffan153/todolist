$(document).ready(function() {
  $('#add').click(function() {
    var taskToAdd = $('#task').val();
    var tasks     = $('#tasks');
    var html = '';
    html += '<li><input type="checkbox" onclick="toggleDone($(\'.task\').eq($(this).parent().index()), $(this))"> &nbsp; ';
    html += '<span class="task">' + taskToAdd + '</span>';
    html += ' &nbsp; &nbsp; <a href="javascript:void(0);" onclick="$(this).parent().hide()"><span class="fa fa-trash"></span></a>';
    html += ' &nbsp; <a href="javascript:void(0);" onclick="$(\'.task\').eq($(this).parent().index()).html(prompt(\'What is the new name?\'));"><span class="material-icons">mode_edit</span></a></li>';
    $('#tasks').append(html);
  });
});
function toggleDone(obj, check) {
  if(check.prop('checked')) {
    obj.css('text-decoration', 'strike-through');
  } else {
    obj.css('text-decoration', 'none');
  }
}
