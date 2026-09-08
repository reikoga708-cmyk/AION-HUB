
// ===============================
// AION HUB - SISTEMA DE NAVEGAÇÃO
// ===============================

function mostrarPagina(nomePagina) {

    // Esconder todas as páginas
    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(function(pagina) {
        pagina.classList.remove("ativa");
    });


    // Mostrar a página escolhida
    const paginaSelecionada = document.getElementById(nomePagina);

    if (paginaSelecionada) {
        paginaSelecionada.classList.add("ativa");
    }

    
    // Voltar para o topo
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// AION HUB - INICIALIZAÇÃO
// ===============================

document.addEventListener("DOMContentLoaded", function() {

    // Abrir a página inicial
    mostrarPagina("inicio");

    console.log("AION HUB iniciado.");
});
