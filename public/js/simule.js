/*
anotações:

data nascimento:
document.querySelector('input[name="dataNascimento"]').value

sexo:
document.querySelector('input[type="radio"]:checked').value

lista dos salarios:
document.querySelectorAll('.campoSalario')

lista das datas:
document.querySelectorAll('.campoAnoMes')
*/

/* Formatando valor em reais */
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

/* Adicionar uma linha na tabela de salários */
const botao = document.getElementById("adicionarLinha");

botao.addEventListener("click", function () {
  const tabela = document.getElementById("minhaTabela");
  const corpo = tabela.getElementsByTagName("tbody")[0];
  const novaLinha = corpo.insertRow(-1);
  const coluna1 = novaLinha.insertCell(0);
  const coluna2 = novaLinha.insertCell(1);
  coluna1.innerHTML = "<input type='month' class='campoAnoMes' name='campoAnoMes[]'>";

  let elemSalario = document.createElement('input');
  elemSalario.setAttribute('type', 'text');
  elemSalario.setAttribute('name', 'campoSalario[]');
  elemSalario.classList.add('campoSalario')
  elemSalario.addEventListener("keyup", formatarMoeda);
  coluna2.appendChild(elemSalario);
});

/* Ocultar o elemento 'bloco' do HTML */
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

// document.getElementById('formularioAAAAAAAAAAAAAAA').addEventListener('submit', function (event) {
//   event.preventDefault(); // Evita o comportamento padrão de recarregar a página

//   // Obtenha os valores dos campos do formulário
//   const mesAnoInputs = document.querySelectorAll('input[name="mesAno"]');
//   const salarioInputs = document.querySelectorAll('input[name="salario"]');
//   const genero = document.querySelector('input[name="genero"]:checked').value;
//   const dataNascimento = document.querySelector('.data').value;

//   // Crie um array para armazenar os valores dos campos de mês/ano e salário
//   const dados = [];

//   // Percorra os campos de mês/ano e salário e adicione os valores ao array de dados
//   for (let i = 0; i < mesAnoInputs.length; i++) {
//     const mesAno = mesAnoInputs[i].value;
//     const salario = salarioInputs[i].value;
//     dados.push({ mesAno, salario });
//   }

//   // Crie um objeto com todos os dados a serem enviados
//   const data = {
//     dados,
//     genero,
//     dataNascimento
//   };

//    // Faça a requisição para inserir os dados no servidor
//    fetch('/inserir_dados', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then(response => {
//     if (response.ok) {
//       console.log('Dados inseridos com sucesso!');
//       // Faça aqui qualquer ação adicional que você deseja realizar após a inserção dos dados
//     } else {
//       console.log('Erro ao inserir dados:', response.status);
//       // Trate o erro de inserção dos dados, se necessário
//     }
//   })
//   .catch(error => {
//     console.log('Erro ao inserir dados:', error);
//     // Trate o erro de inserção dos dados, se necessário
//   });
// });
