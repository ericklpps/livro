const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const velocidadePermitida = Number(frm.inVelocidadePermitida.value)
    const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value) //recebendo os valores

    const multaGrave = velocidadePermitida * 1.2 //120%, ao invés de definir os 20%

    if (velocidadeCondutor <= velocidadePermitida){
        resp.innerText = "Sem Multa"
    } else if (velocidadeCondutor > multaGrave){
        resp.innerText = "Multa Grave"
    } else {
        resp.innerText = "Multa Leve"
    }

})