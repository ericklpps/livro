const frm = document.querySelector("form")
const resp = document.querySelector("h3") //Esse vou referenciar somente pela tag

frm.addEventListener("submit", (e)=>{
    const valorPor15Minutos = Number(frm.inValorPor.value)
    const tempoDeUsoDoCliente = Number(frm.inMinutos.value)

    const valorAPagar = Math.ceil(tempoDeUsoDoCliente/15)
    const resultadoFinal = valorAPagar * valorPor15Minutos

    resp.innerText = "O tempo de uso foi de " + tempoDeUsoDoCliente + ", valor a pagar: " + resultadoFinal.toFixed(2)

    e.preventDefault()


})