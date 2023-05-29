const cardContainer1 = document.getElementById('card-container1');
const cardContainer2 = document.getElementById('card-container2');

// Array com os dados das cartas do primeiro contêiner
const cardsData1 = [
  {
    frontContent: '1',
    backContent: 'Receber benefícios previdenciários, tais como: aposentadoria, pensão por morte, auxílio-doença, salário-maternidade, entre outros'
  },
  {
    frontContent: '2',
    backContent: 'Ter acesso à assistência social em casos de necessidade, como o Benefício de Prestação Continuada (BPC)'
  },
  {
    frontContent: '3',
    backContent: 'Ter direito à revisão do benefício caso sejam identificados erros ou omissões no cálculo'
  },{
    frontContent: '4',
    backContent: 'Receber o décimo terceiro salário'
  },{
    frontContent: '5',
    backContent: 'Ter direito à proteção à maternidade e à paternidade'
  },{
    frontContent: '6',
    backContent: 'Participar de programas de reabilitação profissional'
  },{
    frontContent: '7',
    backContent: 'Ter direito à assistência à saúde'
  }
  // Adicione mais objetos para mais cartas...
];

// Array com os dados das cartas do segundo contêiner
const cardsData2 = [
  {
    frontContent: '1',
    backContent: 'Contribuir regularmente para a Previdência Social'
  },
  {
    frontContent: '2',
    backContent: 'Manter seus dados cadastrais atualizados'
  },
  {
    frontContent: '3',
    backContent: 'Informar sobre qualquer alteração em sua situação, como mudança de endereço, estado civil, trabalho, entre outros'
  },
  {
    frontContent: '4',
    backContent: 'Comparecer às perícias médicas e sociais quando solicitado'
  },
  {
    frontContent: '5',
    backContent: 'Comunicar o óbito do beneficiário em caso de pensão por morte'
  },
  {
    frontContent: '6',
    backContent: 'Devolver valores recebidos indevidamente, quando constatado erro no pagamento do benefício'
  },
  {
    frontContent: '7',
    backContent: 'Os beneficiários devem seguir as normas estabelecidas pela Previdência Social, cumprir prazos para requerer benefícios e manter a documentação em dia'
  }
  // Adicione mais objetos para mais cartas...
];

// Função para criar os cartões em um determinado contêiner
function createCards(container, cardsData) {
  for (let i = 0; i < cardsData.length; i++) {
    const cardData = cardsData[i];

    // Criação do elemento de carta
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.addEventListener('click', () => flipCard(cardElement));

    // Criação do conteúdo da frente da carta
    const frontElement = document.createElement('div');
    frontElement.classList.add('front');
    frontElement.textContent = cardData.frontContent;

    // Criação do conteúdo do verso da carta
    const backElement = document.createElement('div');
    backElement.classList.add('back');
    backElement.textContent = cardData.backContent;

    // Anexa o conteúdo à carta
    cardElement.appendChild(frontElement);
    cardElement.appendChild(backElement);

    // Adiciona a carta ao contêiner
    container.appendChild(cardElement);
  }
}

// Criação dos cartões no primeiro contêiner
createCards(cardContainer1, cardsData1);

// Criação dos cartões no segundo contêiner
createCards(cardContainer2, cardsData2);

function flipCard(card) {
    if (!card.classList.contains('flip')) {
      card.classList.add('flip');
    }
  }