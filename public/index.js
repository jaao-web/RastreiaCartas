window.addEventListener('load', () => {
  registerServiceWorker();
})

let cardSelecionado;
let prctgVitoria = 0;
let vitorias = 0;
let derrotas = 0;
let textoVitoriaTotal = 'Porcentagem de vitoria: ' + prctgVitoria + '%';

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js')
      .then((res) => console.log('service worker registered on', res.scope))
      .catch((err) => console.log('service worker not registered', err));
  }
}

function selecionarAba(aba) {
  let primeiraaba = document.getElementById('primeira-aba');
  let segundaaaba = document.getElementById('segunda-aba');

  if (aba === 1) {
    primeiraaba.style.display = 'flex';
    segundaaaba.style.display = 'none';
  } else {
    primeiraaba.style.display = 'none';
    segundaaaba.style.display = 'flex';
  }

  function validarApagarCard(card, estilo) {
    let cardAtivado = document.getElementById(card);
    cardAtivado.style.display = estilo;
    selecionarAba(1);
  }
  window.validarApagarCard = validarApagarCard

  function setarCard(card) {
    cardSelecionado = card;
  }
  window.setarCard = setarCard

  function apagarCard() {
    validarApagarCard(cardSelecionado, 'none');
  }
  window.apagarCard = apagarCard

  function winLose(jogo) {
    if (jogo === 'v') {
      vitorias++
      console.log(vitorias)
    }
    else {
      derrotas++
    }
    fazPorcentagem()
    exibeNum()
  }
  window.winLose = winLose

 function exibeNum(){
    document.getElementById('textovit').innerHTML = 'Porcentagem de vitória: ' + prctgVitoria + '%'
    document.getElementById('numvit').innerHTML = vitorias + '-' + derrotas
  }

  function fazPorcentagem() {
    let totalJogos = vitorias + derrotas
    prctgVitoria = (vitorias / totalJogos) * 100
  }

  function apagarDeck() {
    validarApagarCard('avivar', 'none')
    validarApagarCard('lunar', 'none')
    validarApagarCard('solar', 'none')
    validarApagarCard('guff', 'none')
    validarApagarCard('escama', 'none')
    validarApagarCard('kazakusan', 'none')
  }
  window.apagarDeck = apagarDeck

  function apagarJogos(){
    vitorias = 0
    derrotas = 0
    exibeNum()
  }
  window.apagarJogos = apagarJogos
}