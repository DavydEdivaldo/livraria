
const btnFiltrarLivros = document.querySelectorAll('.btn');

btnFiltrarLivros.forEach(btn => {
    btn.addEventListener('click', filtrarLivrosFront);
});

function filtrarLivrosFront(){
    const identificarBtn = document.getElementById(this.id);
    const categoria = identificarBtn.value

    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirLivrosNaTela(livrosFiltrados)
 }