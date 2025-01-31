//Adicionando ouvinte para referenciar o documento
const frm = document.querySelector("form")
const resp = document.querySelector("#respOut") //referenciando pelo id

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nome = frm.inNome.value //obter os valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    //condições
    
    /*
    let peso
    if (masculino){
        peso = 22 * Math.pow(altura, 2)  // se maculino (ou, if masculino == true)
    } else{
        peso = 21 * Math.pow(altura, 2)
    }
    */

    //mesma operação, mas com operador ternário
    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

    
    // apresenta a resposta e altera o conteúdo do h3 da página
    resp.innerText = nome + ": Seu peso ideal é de " + peso.toFixed(3) + " KG."
    
})
frm.addEventListener("reset",()=>{
    resp.innerText = " " //limpa o conteúdo do elemento h3 que exibe a resposta
}) 
/*Esse ouvinte de evento serve para limpar também o h3, segue a mesma lógica do que estou usando
Ele puxa do formulário, pega o input que possui a função reset e deixa o campo vazio*/