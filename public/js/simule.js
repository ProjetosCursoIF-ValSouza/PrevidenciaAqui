/*Formatar valor em reais*/
function formatarMoeda(e) {
  var v = e.target.value.replace(/\D/g, "");
  v = (v / 100).toFixed(2) + "";
  v = v.replace(".", ",");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
  if (v < 1) {
    e.target.value = "R$ 0," + v.padStart(2, '0');
  } else {
    e.target.value = "R$ " + v;
  }
}

/*Adicionar uma linha na tabela de salários*/
const botao = document.getElementById("adicionarLinha");
botao.addEventListener("click", function () {
  const tabela = document.getElementById("minhaTabela");
  const corpo = tabela.getElementsByTagName("tbody")[0];
  const novaLinha = corpo.insertRow(-1);
  const coluna1 = novaLinha.insertCell(0);
  const coluna2 = novaLinha.insertCell(1);
  coluna1.innerHTML = "<input type='month'>";

  let elemSalario = document.createElement('input');
  elemSalario.setAttribute('type', 'text');
  elemSalario.classList.add('campoSalario')
  elemSalario.addEventListener("keyup", formatarMoeda);   
  coluna2.appendChild(elemSalario);

  // let elemImg = document.createElement('img');
  // elemImg.setAttribute('src', 'img/foto1.jpg');
  // elemImg.setAttribute('alt', 'esta é a foto de perfil');

  // let painel = document.querySelector('.painel');
  // painel.append(elemImg);

  // let numero = "R$ 12,34"
// parseFloat(numero.replace(',', '.').replace('R$', '').trim())

});

/*Ocultar o elemento 'bloco' do html*/
const mostrar = document.getElementById("mostrar");
const bloco = document.querySelector(".bloco");

mostrar.onclick = function () {
  if (bloco.style.display === "none") {
    bloco.style.display = "flex";
    mostrar.innerHTML = "Voltar";
  } else {
    bloco.style.display = "none";
    mostrar.innerHTML = "Clique Aqui";
  }
};


