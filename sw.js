// Service Worker for Pebblous Blog
// Implements client-side caching for images and assets

const CACHE_NAME = 'pebblous-blog-v1';
const CACHE_DURATION = 365 * 24 * 60 * 60 * 1000; // 1 year

// Files to cache
const urlsToCache = [
  '/',
  '/styles/common-styles.css',
  '/scripts/common-utils.js',
  '/image/Pebblous_BM_Orange_RGB.png'
];

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Cache strategy: Cache first, then network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only cache same-origin requests
  if (url.origin !== location.origin) return;

  // Cache images aggressively
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            // Return cached image
            return response;
          }
          // Fetch and cache new image
          return fetch(request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(request, responseToCache));
            }
            return networkResponse;
          });
        })
    );
    return;
  }

  // Network first for HTML
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache first for CSS/JS
  if (request.destination === 'style' || request.destination === 'script') {
    event.respondWith(
      caches.match(request)
        .then(response => response || fetch(request))
    );
    return;
  }
});

// Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});
