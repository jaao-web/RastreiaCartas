window.addEventListener('load', () => {
  registerServiceWorker();
})

let cardSelecionado;

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

  function validarApagarCard(card, estilo){
    let cardAtivado = document.getElementById(card);
    cardAtivado.style.display = estilo;
    selecionarAba(1);
  }
  window.validarApagarCard = validarApagarCard

  function setarCard(card){
    cardSelecionado = card;
  }
  window.setarCard = setarCard

  function apagarCard(){
    validarApagarCard(cardSelecionado, 'none');
  }
  window.apagarCard = apagarCard

}