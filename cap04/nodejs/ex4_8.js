const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor da Compra R$: "))

const aux = Math.floor(valor / 20)

let parcelas
if (aux == 0){
    parcelas = 1 //se o resultado for 1, significa que é possível ter parcela
}else if (aux > 6){
    parcelas = 6 // se a parcela for maior que 6x, divide por 6 pois é o limite
}else{
    parcelas = aux //aqui diz que se couber na divisão, faz em quantas vezes couber, limitando a 6 anteriormente
}

const valorParcela = valor / parcelas
console.log("Pode pagar em " + parcelas + "x de R$: " + valorParcela.toFixed(2))
