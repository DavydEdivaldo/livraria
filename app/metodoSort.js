const btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPreco.addEventListener('click', ordenarPreco);

function ordenarPreco(){
    let valoresOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(valoresOrdenados);
}

//responsavel por ordenas or liros por preço.