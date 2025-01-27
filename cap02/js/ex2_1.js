//cria referência ao form e ao elemento h3, que é onde a resposta será exibida

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    const nome = frm.inNome.value //obtém o nome digitado no form
    resp.innerText = "Olá " + nome; //exibe a resposta do programa 
    e.preventDefault() //evita envio do form
})

/* minha compreensão: criamos as variáveis frm, que popula o form no html e a resp, que popula o h3
que recebe o que será digitado. Pegamos a variavel fmr e adicionamos o evento nela, assim, pegamos o conteúdo que 
foi digitado no formulário e jogamos para a variável resp, que exibirá o texto + o conteúdo digitado
*/