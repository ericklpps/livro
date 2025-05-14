let formulario = document.querySelector('form');

let resposta = document.getElementById('outResp1');
let tipo = document.getElementById('outResp2');

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    let ladoA = Number(document.getElementById("inLadoA").value)
    let ladoB = Number(document.getElementById("inLadoB").value)
    let ladoC = Number(document.getElementById("inLadoC").value)

    if(ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoC + ladoB < ladoA){
        resposta.innerHTML = `Não é possível formar triângulo`
    }

    if (ladoA == ladoB && ladoB == ladoC) {
    resposta.innerHTML = `Lados podem formar triângulo`;
    tipo.innerHTML = `Triângulo equilátero`;
} else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
    resposta.innerHTML = `Lados podem formar triângulo`;
    tipo.innerHTML = `Triângulo escaleno`;
} else {
    resposta.innerHTML = `Lados podem formar triângulo`;
    tipo.innerHTML = `Triângulo isósceles`;
}

})