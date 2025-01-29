const frm = document.querySelector("form")
const saida1 = document.querySelector("#saidaResp1")
const saida2 = document.querySelector("#saidaResp2")

frm.addEventListener("submit", (e)=>{
    const nomeMedicacao = frm.inMedicamento.value       //obtendo valores dos campos
    const precoMedicacao = Number(frm.inPreco.value)
    
    
    const precoFinal = Math.floor(precoMedicacao * 2)

    saida1.innerText = "Promoção de " + nomeMedicacao
    saida2.innerText = "Leve 2 por " + precoFinal.toFixed(2)

    e.preventDefault()


})