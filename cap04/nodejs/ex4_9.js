const prompt = require("prompt-sync")()

const numero = Number(prompt("Número (centena): ")) //le o número
if(numero < 100 || numero >= 1000){
    console.log("Erro, o número deve ser uma centena")
    return
}
//se o número, por exemplo, for 123
const num1 = Math.floor(numero/100)// numero(123)/100 = 1.23 O math.floor arredonda para 1
const sobra = numero % 100 //aqui, ele retira a centena, no caso do exemplo, ficaria sobrando 23
const num2 = Math.floor(sobra/10) //levando a sobra, no caso do ex, 23, o math floor faz /10, arredondando para 2
const num3 = sobra % 10 //aqui, tiramos a dezena da sobra, ou seja, 23, fica 3

console.log("invertido: " + num3 + num2 + num1)