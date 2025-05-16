let formulario = document.querySelector('form');
let resp = document.querySelector('h3');

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    let nome =  formulario.inNome.value;
    let generoMasculino = formulario.inMasculino.checked;
    let altura = Number(formulario.inAltura.value);

    let peso;

    if(generoMasculino){
        peso = 22 * Math.pow(altura, 2);
        resp.innerHTML = `${nome}, você como um homem de ${altura} cm de altura, o peso ideal é de ${peso.toFixed(2)}`
    }else{
        peso = 21 * Math.pow(altura, 2);
        resp.innerHTML = `${nome}, você como uma mulher de ${altura} cm de altura, o peso ideal é de ${peso.toFixed(2)}`
    }

})