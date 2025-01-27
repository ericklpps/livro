//cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    const veiculo = frm.inVeiculo.value         //obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    const entrada = preco 
})