let formulario = document.querySelector('form');

let resp = document.querySelector('h3');

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();

    let numero = Number(formulario.inNumero.value);

    let calculaRaizExata = Math.sqrt(numero);

    if(Number.isInteger(calculaRaizExata)){
        resp.innerHTML = `Raiz de ${numero} é exata (${calculaRaizExata})`
    }else{
        resp.innerHTML = `Erro! Raíz não é exata`
    }
})