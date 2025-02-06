const prompt = require("prompt-sync")()

const horaBrasil = Number(prompt("Qual a hora no Brasil?: "))

let horaFranca = horaBrasil + 5

if (horaFranca > 24){
    horaFranca = horaFranca - 24
}

console.log("O horário na frança é: " + horaFranca.toFixed(2))

//caso interessante, o node as vezes não identifica certo, nesse caso, precisamos também converter
//o Number vem antes do prompt