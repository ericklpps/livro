const prompt = require("prompt-sync")() //adiciona o pacote para entrada de dados
//Utilizando o switch case para uma condição
//Switch é util quando temos varias alternativas definidas a partir do conteúdo de uma variável
const bairro = prompt("Bairro de entrega: ")

let taxaEntrega

switch (bairro){
    case "Centro":
        taxaEntrega = 5.00
        break
    case "Fragata":
    case "Três Vendas":
        taxaEntrega = 7.00
        break //nesse caso, como a taxa é a mesma para ambos, só colocar um abaixo do outro
    case "Laranjal":
        taxaEntrega = 10.00
        break
    default:
        taxaEntrega = 8.00
}
console.log("Taxa R$: " + taxaEntrega.toFixed(2))
