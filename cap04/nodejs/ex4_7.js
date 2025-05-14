const prompt = require("prompt-sync")()

const pessoas = Number(prompt("Nº de pessoas: "))
const peixes = Number(prompt("Nº de peixes"))

let totalAPagar

if (peixes <= pessoas){
    totalAPagar = pessoas * 20;
}else{
    totalAPagar = (pessoas * 20) + ((peixes - pessoas) * 12);
    //como cada pessoa tem direito a um peixe, calculamos o que tem de extra
}
console.log(`Pagar R$: ${totalAPagar.toFixed(2)}`)