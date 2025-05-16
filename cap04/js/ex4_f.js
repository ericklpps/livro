let formulario = document.querySelector('form');
let saida = document.getElementById('respOut');

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let valorCompra = Number(document.getElementById('valor-compra').value);
    
    if (formulario.dinheiro.checked === true) {
        let descontoDinheiro = valorCompra - ((10 / 100) * valorCompra);
        saida.innerHTML = `Valor original R$ ${valorCompra.toFixed(2)}, valor final R$ ${descontoDinheiro.toFixed(2)}`;
    } 
    else if (formulario.debito.checked === true) {
        let descontoDebito = valorCompra - ((5 / 100) * valorCompra);
        saida.innerHTML = `Valor original R$ ${valorCompra.toFixed(2)}, valor final R$ ${descontoDebito.toFixed(2)}`;
    } 
    else if (formulario.credito.checked === true) {
        saida.innerHTML = `Valor original R$ ${valorCompra.toFixed(2)}, valor final R$ ${valorCompra.toFixed(2)}`;
    } 
    else if (formulario.parcelado.checked === true) {
        let valorAPrazo = valorCompra + ((20 / 100) * valorCompra);
        saida.innerHTML = `Valor original R$ ${valorCompra.toFixed(2)}, valor final R$ ${valorAPrazo.toFixed(2)}`;
    }
});
