let formulario = document.querySelector('form');
let resp1 = document.querySelector('h3');
let resp2 = document.querySelector('h4');

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    //pegando o atributo formulário, o identificador do que quero e seu valor
    const nome =  formulario.inNome.value;
    const nota1 = Number(formulario.inNota1.value);
    const nota2 = Number(formulario.inNota2.value);

    const media = (nota1 + nota2) / 2

    if(media >=6){
        resp1.innerHTML = `${nome}, você foi aprovado!`
        resp2.innerHTML = `${media.toFixed(2)} foi sua média`
    }else{
        resp1.innerHTML = `${nome}, você foi reprovado!`
        resp2.innerHTML = `${media.toFixed(2)} foi sua média`
    }
})
