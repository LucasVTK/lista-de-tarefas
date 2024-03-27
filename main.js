$(document).ready(function(){
    $('#tarefa-form').submit(function(event){
        event.preventDefault();
        var task = $('#tarefa').val();
        if(task !== ''){
            $('#task-list').append('<li>' + task + '</li>');
            $('#tarefa').val('');
        }
    });

    $(document).on('click', '#task-list li', function(){
        $(this).toggleClass('completed');
    });
});