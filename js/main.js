$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: '<span class="campoIncorreto">Por favor, insira seu nome</span>',
            telefone: '<span class="campoIncorreto">insira seu telefone</span>',
            email: '<span class="campoIncorreto">Qual o seu e-mail?</span>',
            mensagem: '<span class="campoIncorreto">Digite sua mensagem</span>'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text(); //recuperando texto "irmão"

        $('#veiculo-interesse').val(nomeVeiculo); //preenchendo o input com a opção clicada

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000) //animando para rolar para o campo contato //1000 refere-se ao tempo de animação.
    })
})