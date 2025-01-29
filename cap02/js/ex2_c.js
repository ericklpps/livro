const frm = document.querySelector("form")
const pH3 = document.querySelector("#idDescricao") // fazendo pelo id
const sH3 = document.querySelector("#idValor")

frm.addEventListener("submit", (e)=>{
    const produto = frm.inProdutoMercado.value
    const preco = Number(frm.inPrecoProduto.value)

    const produtos = preco * 2
    const terceiroProd = preco / 2
    const desconto = produtos + terceiroProd

    pH3.innerText = produto + " - Promoção: Leve 3 por R$ " + desconto.toFixed(2)
    sH3.innerText = "O Terceiro produto sairá por apenas R$ " + terceiroProd.toFixed(2)

    e.preventDefault()

})