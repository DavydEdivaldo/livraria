let livros = [];
const endpointDaApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscaLivrosNaApi();

async function getBuscaLivrosNaApi(){
    const res = await fetch(endpointDaApi)
    livros = await res.json();
    
    let livrosComDesconto = aplicarDescontoLivro(livros)
    exibirLivrosNaTela(livrosComDesconto);
}
