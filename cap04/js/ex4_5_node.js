const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite um número: "))

let raiz = Math.sqrt(numero);

if(Number.isInteger(raiz)){ //Verifica se o número é inteiro
    console.log("Raiz: " + raiz)
}else{
    console.log("A raíz de " + numero + " não é exata ")
}