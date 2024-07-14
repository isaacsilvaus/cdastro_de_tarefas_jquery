$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function (){
        $('form').slideUp();
    })

    $('form').on('submit' , function(e){
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');

        $(novoItem).click(function(){
            $(this).css('text-decoration', 'line-through');
        })
    })

})