const prompt = require("prompt-sync")()

const pesoEmKg = Number(prompt("Peso da ração (KG): "))
const pesoEmGramas = Number(prompt( "Consumo de ração (g): "))

const pesoKgParaGrama = (pesoEmKg * 1000)
const dias = Math.floor(pesoKgParaGrama/pesoEmGramas)
const sobra = pesoKgParaGrama % pesoEmGramas

console.log("Peso da ração: " + pesoEmKg)
console.log( "Consumo diário de " + pesoEmGramas + " gramas")
console.log("Duração: " +  dias + " dias")
console.log("Sobra: "+ sobra)