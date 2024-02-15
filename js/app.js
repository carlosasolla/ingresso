function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
    comprarExec(qtd, tipo.value);
}

function comprarExec(qtd, tipo) {
    let elemento = document.getElementById('qtd-' + tipo);
    let qtdElem = parseInt(elemento.textContent);

    if (qtd > qtdElem) {
        alert('Quantidade indisponível para tipo ' + tipo);
    } else {
        qtdElem -= qtd;
        elemento.textContent = qtdElem;
        alert('Compra realizada com sucesso');
    }
}
