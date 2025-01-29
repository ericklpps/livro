// referencia ao form por tag 
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e)=>{ //adicionando o evento a variavel que faz referencia ao form, dizendo que ao clicar submit
    //Entrada de dados
    e.preventDefault()
    const nome = frm.inNome.value
    const notaUm = Number(frm.inNota1.value)
    const notaDois = Number(frm.inNota2.value)

    const media = Math.round(notaUm + notaDois)/2

    resp1.innerText = "Média das notas: "+ media.toFixed(2)

    //condicoes
    if (media>=7){
        resp2.innerText = "Parabéns " + nome + ", você está aprovado com média: " + media
        resp2.style.color = "blue"
    }else if(media == 6){
        resp2.innerText = nome + ", você está de exame"
        resp2.style.color="green"
    } else{
        resp2.innerText = "Infelizmente "+nome+", você está reprovado, sua média foi: " +media
        resp2.style.color="red"
    }
})