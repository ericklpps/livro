const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    
    let verificacao = numero % 2
    
    if(verificacao === 0){
        resp.innerText = "o número é par"
    }else{
        resp.innerText = "o número é impar"
    }
})