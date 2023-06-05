/* const express = require('express');
const router = express.Router();
const db = require('../config/database.config');
const path = require('path');
const ejs = require('ejs');

// Rota para exibir o formulário de simulação
router.get('/simule', function (req, res, next) {
  res.render('simule');
});

// Rota para criar uma nova simulação
router.post('/simule', async function (req, res, next) {
  let {
    mesAno,
    salario,
    genero,
    dataNascimento
  } = req.body;

  genero = genero == "Feminino" ? "f" : "m";
  const idadeAposentadoria = req.body.genero === 'Masculino' ? 65 : 62;
  const anoNascimento = new Date(req.body.dataNascimento).getFullYear();
  const idade = new Date().getFullYear() - anoNascimento;
  const tempo_contribuicao_mes = req.body['campoAnoMes[]'];
  const salarios = req.body['campoSalario[]'];

  const sql_simulacao = `INSERT INTO simulacao_beneficio (genero, data_nascimento, idade, tempo_contribuicao_mes, idade_aposentadoria) VALUES (?, ?, ?, ?, ?);`;
  let values = [genero, dataNascimento, idade, tempo_contribuicao_mes.length, idadeAposentadoria];
  let [result] = await db.poolSimule.query(sql_simulacao, values);
  const id_simulacao = result.insertId;

  for (let index = 0; index < tempo_contribuicao_mes.length; index++) {
    const query = `INSERT INTO simulacao_periodo_trabalho (ano, mes, salario, simulacao_beneficio_id) VALUES (?, ?, ?, ?)`;
    values = [
      tempo_contribuicao_mes[index].substring(0, 4),
      tempo_contribuicao_mes[index].substring(5, 7),
      salarios[index].replace(".", "").replace("R$", "").replace(",", "."),
      id_simulacao
    ];
    [result] = await db.poolSimule.query(query, values);
  }

  // Preencha os dados necessários para exibição no formulário "Resultados"
  const dadosResultados = {
    genero: genero == "f" ? "Feminino" : "Masculino",
    idade,
    tempo_contribuicao_mes,
    // Preencha os demais dados necessários para exibição no formulário "Resultados"
    // ...
  };

  const resultadosTemplatePath = path.join(__dirname, '../views/resultados.ejs');
  const renderedResultados = await ejs.renderFile(resultadosTemplatePath, dadosResultados);
  res.send(renderedResultados);
});

/*module.exports = router; 

const express = require('express');
const router = express.Router();
const db = require('../config/database.config');
const path = require('path');
const ejs = require('ejs');

// Função para calcular a idade com base na data de nascimento
function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNascimento = nascimento.getMonth();
  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
} */

// Função para calcular o mês e ano da aposentadoria
/* function calcularAposentadoria(idade, genero) {
  const idadeAposentadoria = genero === 'Masculino' ? 65 : 62;
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const mesAtual = hoje.getMonth() + 1;
  let mesAposentadoria, anoAposentadoria;

  if (mesAtual <= 6) {
    mesAposentadoria = 7;
    anoAposentadoria = anoAtual + idadeAposentadoria - idade;
  } else {
    mesAposentadoria = 7;
    anoAposentadoria = anoAtual + idadeAposentadoria - idade + 1;
  }

  return {
    mesAposentadoria,
    anoAposentadoria
  };
}

// Rota para realizar a soma dos valores do campo salario_atualizado no bd previdenciaaquidb:
app.get('/soma', (req, res) => {
  const query = 'SELECT SUM(salario_atualizado) AS total FROM simulacao_periodo_trabalho';
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error('Erro ao executar a consulta:', error);
      return res.status(500).json({ error: 'Erro ao executar a consulta.' });
    }

    const total = results[0].total;
    res.json({ total });
  });
});



// Função para calcular o valor_beneficio
function calcularBeneficio(genero, idade, salario) {
  let idadeMinima;
  let indiceBase;
  
  if (genero === 'f') {
    idadeMinima = 62;
    if (salario < 180) {
      return 'Tempo de contribuição abaixo do mínimo requerido!';
    }
  } else if (genero === 'm') {
    idadeMinima = 65;
    if (salario < 240) {
      return 'Tempo de contribuição abaixo do mínimo requerido!';
    }
  } else {
    return 'Condição mínima ainda não adquirida!';
  }
  
  if (idade < idadeMinima) {
    return 'Idade abaixo do mínimo requerido!';
  }
  
  if ((genero === 'f' && salario === 180) || (genero === 'm' && salario === 240)) {
    indiceBase = 0.6;
  } else if ((genero === 'f' && salario > 180) || (genero === 'm' && salario > 240)) {
    const quantidadesExcedentes = (salario - (genero === 'f' ? 180 : 240)) / 12;
    indiceBase = 0.6 + quantidadesExcedentes * 0.02;
  }

  const valorBeneficio = total * indiceBase;
  return valorBeneficio;
}



// Rota para exibir o formulário de simulação
router.get('/simule', function (req, res, next) {
  res.render('simule');
});

// Rota para criar uma nova simulação
router.post('/simule', async function (req, res, next) {
  let {
    mesAno,
    salario,
    genero,
    dataNascimento
  } = req.body;

  genero = genero == "Feminino" ? "f" : "m";
  const idade = calcularIdade(dataNascimento);
  const { mesAposentadoria, anoAposentadoria } = calcularAposentadoria(idade, genero);

  const sql_simulacao = `INSERT INTO simulacao_beneficio (genero, data_nascimento, idade, tempo_contribuicao_mes, idade_aposentadoria, mes_aposentadoria, ano_aposentadoria) VALUES (?, ?, ?, ?, ?, ?, ?);`;
  let values = [genero, dataNascimento, idade, mesAno.length, idadeAposentadoria, mesAposentadoria, anoAposentadoria];
  let [result] = await db.poolSimule.query(sql_simulacao, values);
  const id_simulacao = result.insertId;

  for (let index = 0; index < mesAno.length; index++) {
    const query = `INSERT INTO simulacao_periodo_trabalho (ano, mes, salario, simulacao_beneficio_id) VALUES (?, ?, ?, ?)`;
    const [ano, mes] = mesAno[index].split('/');
    const salario_atualizado = parseFloat(salario[index].replace(".", "").replace("R$", "").replace(",", ".")) * obterIndiceAtualizacao(mes);

    const queryValues = [ano, mes, salario_atualizado, id_simulacao];
    await db.poolSimule.query(query, queryValues);
  }
  

  res.redirect('/resultados');
});

module.exports = router; */

const express = require('express');
const router = express.Router();
const db = require('../config/database.config');
const path = require('path');
const ejs = require('ejs');

// Função para calcular a idade com base na data de nascimento
function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNascimento = nascimento.getMonth();
  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

// Função para calcular o mês e ano da aposentadoria
function calcularAposentadoria(idade, genero) {
  const idadeAposentadoria = genero === 'Masculino' ? 65 : 62;
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const mesAtual = hoje.getMonth() + 1;
  let mesAposentadoria, anoAposentadoria;

  if (mesAtual <= 6) {
    mesAposentadoria = 7;
    anoAposentadoria = anoAtual + idadeAposentadoria - idade;
  } else {
    mesAposentadoria = 7;
    anoAposentadoria = anoAtual + idadeAposentadoria - idade + 1;
  }

  return {
    mesAposentadoria,
    anoAposentadoria
  };
}

// Função para calcular o valor_beneficio
async function calcularBeneficio(genero, idade, id_simulacao) {
  let idadeMinima;
  let indiceBase;

  if (genero === 'f') {
    idadeMinima = 62;
  } else if (genero === 'm') {
    idadeMinima = 65;
  } else {
    return 'Condição mínima ainda não adquirida!';
  }

  if (idade < idadeMinima) {
    return 'Idade abaixo do mínimo requerido!';
  }

  const query = `SELECT SUM(salario_atualizado) as total FROM simulacao_periodo_trabalho WHERE simulacao_beneficio_id = ?`;
  const [result] = await db.poolSimule.query(query, [id_simulacao]);
  const salarioTotal = result[0].total;

  if (genero === 'f') {
    if (salarioTotal < 180) {
      return 'Tempo de contribuição abaixo do mínimo requerido!';
    } else if (salarioTotal === 180) {
      indiceBase = 0.6;
    } else if (salarioTotal > 180) {
      const quantidadesExcedentes = (salarioTotal - 180) / 12;
      indiceBase = 0.6 + quantidadesExcedentes * 0.02;
    }
  } else if (genero === 'm') {
    if (salarioTotal < 240) {
      return 'Tempo de contribuição abaixo do mínimo requerido!';
    } else if (salarioTotal === 240) {
      indiceBase = 0.6;
    } else if (salarioTotal > 240) {
      const quantidadesExcedentes = (salarioTotal - 240) / 12;
      indiceBase = 0.6 + quantidadesExcedentes * 0.02;
    }
  }

  const valorBeneficio = salarioTotal * indiceBase;
  return valorBeneficio.toFixed(2);
}

// Rota para calcular a soma dos salários atualizados
router.get('/soma', async (req, res) => {
  try {
    const query = `SELECT SUM(salario_atualizado) as total FROM simulacao_periodo_trabalho`;
    const [result] = await db.poolSimule.query(query);
    const totalSalarios = result[0].total || 0;

    res.send(`Total dos salários atualizados: ${totalSalarios}`);
  } catch (error) {
    console.error('Erro ao calcular a soma dos salários:', error);
    res.status(500).send('Erro ao calcular a soma dos salários');
  }
});

// Rota para realizar a simulação
router.post('/simule', async (req, res) => {
  const { genero, dataNascimento, mesAno, salario } = req.body;
  const idade = calcularIdade(dataNascimento);
  const { mesAposentadoria, anoAposentadoria } = calcularAposentadoria(idade, genero);

  const sql_simulacao = `INSERT INTO simulacao_beneficio (genero, data_nascimento, idade, tempo_contribuicao_mes, idade_aposentadoria, mes_aposentadoria, ano_aposentadoria) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [genero, dataNascimento, idade, mesAno.length, idadeAposentadoria, mesAposentadoria, anoAposentadoria];

  try {
    const [result] = await db.poolSimule.query(sql_simulacao, values);
    const id_simulacao = result.insertId;

    for (let index = 0; index < mesAno.length; index++) {
      const query = `SELECT salario_atualizado FROM simulacao_periodo_trabalho WHERE ano = ? AND mes = ? AND simulacao_beneficio_id = ?`;
      const [ano, mes] = mesAno[index].split('/');

      // Executar a consulta para obter o salario_atualizado
      const [salarioResult] = await db.poolSimule.query(query, [ano, mes, id_simulacao]);
      const salario_atualizado = salarioResult[0].salario_atualizado;

      const queryValues = [ano, mes, salario_atualizado, id_simulacao];
      await db.poolSimule.query(query, queryValues);
    }

    const valorBeneficio = await calcularBeneficio(genero, idade, id_simulacao);

    res.render(path.resolve(__dirname, '../views/resultados'), {
      valorBeneficio
    });
  } catch (error) {
    console.error('Erro ao realizar a simulação:', error);
    res.status(500).send('Erro ao realizar a simulação');
  }
});

module.exports = router;


