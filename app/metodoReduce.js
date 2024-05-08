function valorDosLivrosSomados(livros){
    return livros.reduce((acc, livro)=> acc + livro.preco, 0)
}
//soma o valor dos livros disponiveis e retorna esse valor 