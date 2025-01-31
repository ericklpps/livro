const frm = document.querySelector("form")
const resp = document.querySelector("#inExibirHora")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const horaBrasil = Number(frm.inHoraBrasil.value)
    
    let horaFranca =   horaBrasil + 5 //calcula o horário

    if (horaFranca > 24) { //se passar das 24 horas na França
        horaFranca = horaFranca - 24 // subtrai 24
    }
    resp.innerText = "Hora na França " + horaFranca.toFixed(2)

})