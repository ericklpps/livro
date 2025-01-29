//Adicionando ouvinte para referenciar o documento
const frm = document.querySelector("form")
const resp = document.querySelector("#respOut") //referenciando pelo id

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nome = frm.inNome.value //obter os valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    //condições
    let peso
    if (masculino){
        peso = 22 * Math.pow(altura, 2) 
    } else{
        peso = 21 * Math.pow(altura, 2)
    }

    // apresenta a resposta e altera o conteúdo do h3 da página
    resp.innerText = nome + ": Seu peso ideal é de " + peso.toFixed(3) + " KG."
    
})