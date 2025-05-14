let formulario = document.querySelector('form');
let resp = document.querySelector('h3');


formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();    
    let horarioBrasil = Number(document.querySelector('#inHoraBrasil').value)

    let horaFranca = horarioBrasil + 5;

    if(horaFranca > 24){
        horaFranca = horaFranca - 24
    }

    resp.innerHTML = `Horário na França ${horaFranca.toFixed(2)}`

});

