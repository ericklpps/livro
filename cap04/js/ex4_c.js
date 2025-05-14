let formulario = document.querySelector('form')

let respostaTempo = document.getElementById('outResp1')
let respostaTroco = document.getElementById('outResp2')

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    let valor = parseFloat(document.getElementById('inValor').value)

    let valor30Min = 1.00;

    let valor60Min = 1.75;

    let valor120Min = 3.00;

    if (valor < valor30Min){
        respostaTempo = `Valor insuficiente`;
        respostaTroco = "";
    }
    if (valor >= valor30Min && valor < valor60Min ){
        let troco = valor - valor30Min
        respostaTempo.innerHTML = `Tempo: 30 minutos`
        respostaTroco.innerHTML = `Troco: ${troco}`
    }else if(valor >= valor60Min && valor < valor120Min){
        troco = valor - valor60Min
        respostaTempo.innerHTML = `Tempo: 60 minutos`
        respostaTroco.innerHTML = `Troco: ${troco}`
    }else{
        troco = valor - valor120Min
        respostaTempo.innerHTML = `Tempo: 120 minutos`
        respostaTroco.innerHTML = `Troco: ${troco}`
    }
});