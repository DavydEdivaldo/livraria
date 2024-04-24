function aplicarDescontoLivro(livros){
    const desconto = 0.30;
    livrosComDesconto = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    })
    return livrosComDesconto;
}