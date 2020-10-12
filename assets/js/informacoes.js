let respostas = {}

$("#next-1").click(() => {
    const nome = $('#nome').val()

    respostas = {
        nome: nome
    }
    $('.nome-pessoa').text(respostas.nome)
    if (respostas.nome == '') {
        alert('Por favor, Diga-nos o seu nome')
    } else {
        $('#pills-profile-tab').click()

    }
})
$("#next-2").click(function () {
    const selected = new Array();
    $("#checkbox-objetivos input[type=checkbox]:checked").each(function () {
        selected.push(this.value);
        respostas.escolhas = selected
    });

    if (selected.length == 0) {
        alert('Por favor, escolha um pelo menos')
    } else {

        $('#pills-contact-tab').click()

        const newArray = respostas.escolhas;
        console.log(newArray.indexOf('emagrecer'))
        console.log('length:' + newArray.length)

        if (newArray.indexOf('emagrecer') || newArray.length == 1) {
            alert('Tem somente emagrecer')
        } else if(newArray.indexOf('emagrecer') || newArray.indexOf('hipertrofia') || newArray.length == 2){
            alert('Emagrecer e hipertrofia')
        }
    }

})


