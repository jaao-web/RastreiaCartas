function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('sw.js')
        .then((res) => console.log('service worker registered on', res.scope))
        .catch((err) => console.log('service worker not registered', err));
    }
  }
  window.addEventListener('load', () => {
    registerServiceWorker();
  })