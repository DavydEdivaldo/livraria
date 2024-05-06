
const btnFiltrarLivros = document.querySelectorAll('.btn');

btnFiltrarLivros.forEach(btn => {
    btn.addEventListener('click', filtrarLivrosFront);
});

function filtrarLivrosFront(){
    const identificarBtn = document.getElementById(this.id);
    const categoria = identificarBtn.value

    let livrosFiltrados = categoria == "disponivel" ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirLivrosNaTela(livrosFiltrados)
    if(categoria == "disponivel"){
        exibirValorTotalDosLivrosDisponiveisNaTela()
    }
 }

 function exibirValorTotalDosLivrosDisponiveisNaTela(){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
  </div>
    `
 }