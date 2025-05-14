let formulario = document.querySelector('form');

let notas100 = document.getElementById('outResp1');
let notas50 = document.getElementById('outResp2');
let notas10 = document.getElementById('outResp3');

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    let valorSaque = document.getElementById('inSaque').value

    if(valorSaque % 10 != 0){
        notas100.innerHTML = `
            notas indisponíveis para esse saque!
        `;
    }
    const notasCem = Math.floor(valorSaque/100);
    let restante = valorSaque % 100;
    const notasCinquenta = Math.floor(restante/50);
    restante = restante % 50
    const notasDez = Math.floor(restante/10);

    if (notasCem > 0){
        notas100.innerHTML = `Notas de R$ 100,00: ${notasCem}`
    }
    if (notasCinquenta > 0){
        notas50.innerHTML = `Notas de R$ 50,00: ${notasCinquenta}`
    }
    if (notasDez > 0){
        notas10.innerHTML = `Notas de R$ 10,00: ${notasDez}`
    }
});