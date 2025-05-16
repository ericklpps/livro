let formulario = document.querySelector('form');

let saida = document.querySelector('h3');

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    let salarioBruto = Number(document.getElementById('salario-bruto').value);

    const descontoPadrao = ((8/100) * salarioBruto)



    if(salarioBruto > 3000){
        const descontoInss = ((10/100) * salarioBruto)
        salarioBruto = salarioBruto - descontoInss - descontoPadrao
        saida.innerHTML = `Seu salário líquido é de ${salarioBruto.toFixed(2)}`; 
    }
    else{
        salarioBruto = salarioBruto - descontoPadrao
        saida.innerHTML = `Seu salário líquido é de ${salarioBruto.toFixed(2)}`; 
    }
})