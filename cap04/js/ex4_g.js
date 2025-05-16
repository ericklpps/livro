let formulario = document.querySelector('form');

let output = document.querySelector('h3');

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    let idade = Number(document.getElementById('idade').value)

    if(idade < 12 && idade > 0){
        output.innerHTML = `Você tem ${idade} ano(s), você é uma criança!`
    }
    else if(idade > 12 && idade < 17){
        output.innerHTML = `Você tem ${idade} ano(s), você é um adolescente!`
    }
    else if(idade > 17 && idade < 64){
        output.innerHTML = `Você tem ${idade} ano(s), você é um adulto!`
    }else{ 
        output.innerHTML = `Você tem ${idade} ano(s), você é um idoso!`
    }
})