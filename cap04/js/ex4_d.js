const frm = document.querySelector("form")
const resp = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    let isoceles = "Isoceles"
    let equilatero = "Equilátero"
    let escaleno = "Escaleno"

    if (ladoA > ladoB+ladoC || ladoB > ladoA+ladoC || ladoC > ladoA+ladoB){
        resp.innerText = "Não forma um triângulo"
        resp2.innerText = "Erro"
    } else{
        resp.innerText = "Lados podem formar um triângulo"

        if (ladoA === ladoB && ladoB === ladoC){
            resp2.innerText = equilatero
        }else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
            resp2.innerText = isoceles
        }
        else {
            resp2.innerText = escaleno
        }
    }
})