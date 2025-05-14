let formulario = document.querySelector('form');

let resposta = document.querySelector('h3');

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault()

    const numero = document.getElementById('inNumero').value;

    if (numero%2 == 0){
        resposta.innerHTML = `${numero} é par`
    }else{
        resposta.innerHTML = `${numero} é impar`
    }
})