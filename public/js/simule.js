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
/* Adicionar uma linha na tabela de salários */
const botao = document.getElementById("adicionarLinha");
botao.addEventListener("click", function() {
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
const ver = document.getElementById("ver");
const bloco = document.querySelector(".bloco");
const foto = document.querySelector(".foto");
const formulario = document.getElementById("formulario");
const imagem = document.querySelector(".imagem");

ver.onclick = function () {
  if (bloco.style.display === "none") {
    bloco.style.display = "flex";
    ver.innerHTML = "Voltar";
    foto.classList.add("depois");
    bloco.classList.add("lacuna");
  } else {
    bloco.style.display = "none";
    ver.innerHTML = "Simule Aqui";
  }
};

/*Selecionar apenas um gênero*/
function desmarcarCheckbox(id) {
	const checkbox = document.getElementById(id);
	
	if (checkbox.checked) {
	  if (id === 'masculino') {
		document.getElementById('feminino').checked = false;
	  } else if (id === 'feminino') {
		document.getElementById('masculino').checked = false;
	  }
	}
  }
  

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
//   
const express = require('express');
const router = express.Router();
const SimulacaoBeneficio = require('../models/model');
// ...
router.post('/simule', async (req, res) => {
	// Obtenha os valores dos campos do formulário
	const mesAno = req.body.mesAno;
	const salario = req.body.salario;
	const genero = req.body.genero;
	const dataNascimento = req.body.dataNascimento;
	// Crie um objeto com os dados a serem inseridos
	const simulacao = {
		mesAno,
		salario,
		genero,
		dataNascimento
	};
	try {
		const simulacaoBeneficio = new SimulacaoBeneficio();
		await simulacaoBeneficio.criar(simulacao);
		// Redirect to the results page, passing the necessary data as parameters
		res.redirect(`/resultados?mesAno=${mesAno}&salario=${salario}&genero=${genero}`);
	} catch (error) {
		// Handle the error
		console.error(error);
	}
});
module.exports = router;