// Esconder o navbar
const mostrar = document.getElementById("mostrar");
const navList = document.querySelector(".nav-list");

mostrar.onclick = function () {
  if (window.innerWidth <= 426) {
    if (navList.style.display === "none") {
      navList.style.display = "flex";
      mostrar.innerHTML = "X";
    } else {
      navList.style.display = "none";
      mostrar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  }
};


// Função para atualizar o texto do placeholder
function atualizarPlaceholder(mediaQuery) {
  var campoBusca = document.getElementById("pesquisa");

  if (mediaQuery.matches) {
    // Largura da tela é igual ou inferior a 426px
    campoBusca.placeholder = "Pesquise Aqui";
  } else {
    // Largura da tela é maior que 426px
    campoBusca.placeholder = "O que você deseja saber sobre Previdência Social?";
  }
}

// Cria a media query
var mediaQuery = window.matchMedia("(max-width: 426px)");

// Chama a função inicialmente para definir o texto do placeholder
atualizarPlaceholder(mediaQuery);

// Adiciona um event listener para a mudança de largura
mediaQuery.addListener(atualizarPlaceholder);


// Esconder o placeholder
function hidePlaceholder() {
  var input = document.getElementById("pesquisa");
  input.classList.add("hide-placeholder");
}

function showPlaceholder() {
  var input = document.getElementById("pesquisa");
  input.classList.remove("hide-placeholder");
}
