
$(document).ready(function() {
    //função para expandir o fomrmulario
    $('#btn-open-form').click(function() {
        $('form').slideDown();
    })
    //função para recolher o formulario
    $('.reset').click(()=>{
        $('form').slideUp();
    })

    //função para previnir o caregamento da pagina
    $('form').on('submit', (e) =>{
        e.preventDefault();
        const task = $('#task').val();
        //função para adicionar um nova tarefa
        const newTask = $(`<li class='list-decoration' style='display:none' title=${task}></li>`);
        $(`<p class='task-no-complete task-item'>${task}</p>`).appendTo(newTask);
        $(newTask).appendTo('ul');
        $(newTask).fadeIn();
        $('#task').val('')

    // foi preciso localizar o target de newTask para conseguir adicionar a class
    $(newTask).click((e) =>{
        $(e.target).toggleClass('active');
    })
    })
    


    })



    /*
    $('ul').on( 'click', 'li', function(){
        if($(this).hasClass('active')){
        $('.task-item').toggleClass('active');
        } else{
            $('.task-item').toggleClass('active');

        }
    })*/



    //fixed todo check
    /*
        $('ul').on('click','li', () => {
                $('li').toggleClass('active');
            })*/