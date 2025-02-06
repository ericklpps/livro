const prompt = require("prompt-sync")()
const pessoas = Number(prompt("Nº pessoas: "))
const peixes = Number(prompt("Nº Peixes: "))

let pagar
if(peixes <= pessoas){ //se a quantidade de peixes for igual ou menor o número de pessoas
    pagar = pessoas * 20 //número de pessoas X o valor de entrada, no caso, o total
}else{
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
    //numero de pessoas * os 20 reais, depois verifica quantos peixes serão direito, por pessoa, 
    //subtrai, multiplica o que sobrar por 12
}
console.log("Total da conta R$: " + pagar.toFixed(2))