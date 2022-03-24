const cacheName = 'rastreia-pwa-v1.0';

// Armazena todos os arquivos no cache atual
/*self.addEventListener('install', function (event) {
  caches.open(cacheName).then((cache) => {
    cache.addAll([]);
  });
});*/

// Recupera todos os nomes de cache e apaga aqueles
// que forem diferentes do cache atual
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

// Recupera todos os nomes de cache e apaga aqueles
// que forem diferentes do cache atual
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

// Tenta servir o arquivo do cache atual. Se não for possível,
// baixa o recurso da web e o armazena localmente, antes de entregar
// uma cópia para o usuário.
self.addEventListener('fetch', function (event) {
  let response = caches.open(cacheName).then((cache) => {
    return cache.match(event.request).then((resource) => {
      if (resource) return resource;
      return fetch(event.request).then((resource) => {
        cache.put(event.request, resource.clone());
        return resource;
      });
    });
  });
  event.respondWith(response);
});