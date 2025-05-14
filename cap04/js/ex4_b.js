let formulario = document.querySelector('form');

let resposta = document.querySelector('h3');

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    const velocidadePermitida = Number(document.getElementById('inVelocidadePermitida').value)
    const velocidadeCondutor = Number(document.getElementById('inVelocidadeCondutor').value)

    if (velocidadeCondutor <= velocidadePermitida){
        resposta.innerHTML = `Sem multa, via de ${velocidadePermitida}, condutor a ${velocidadeCondutor}`
    }else{
        if(velocidadeCondutor > velocidadePermitida + (velocidadePermitida * 0.20)){
            resposta.innerHTML = `Multa grave, via de ${velocidadePermitida}, condutor a ${velocidadeCondutor}`
        }else{
            resposta.innerHTML = `Multa leve`
        }
    }
})