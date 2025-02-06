const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const saque = Number(frm.inSaque.value)//pegando o valor do saque
    if(saque % 10 != 0){ //se o saque não for múltiplo de 10, pq se não, nao tem o tipo de nota
        alert("Valor inválido para as notas disponíveis")
        frm.inSaque.focus()
        return
    }

    const notasCem = Math.floor(saque / 100) //Calcula notas de 100
    let resto = saque % 100                 //Quanto sobra para pagar
    const notasCinquenta = Math.floor(resto / 50)//Calcula as notas de 50
    resto = resto % 50 //Quanto ainda sobre
    const notaDez = Math.floor(resto / 10)//Calcula as notas de 10
    if(notasCem > 0){
        resp1.innerText = `Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta > 0){
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notaDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notaDez}`
    }
})