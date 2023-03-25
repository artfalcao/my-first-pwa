const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "./index.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll([

        './index.html',

        './assets/css/style.css',

        './assets/vendor/bootstrap/css/bootstrap.min.css',

        './assets/vendor/bootstrap-icons/bootstrap-icons.css',

        './assets/vendor/boxicons/css/boxicons.min.css',

        './assets/vendor/glightbox/css/glightbox.min.css',

        './assets/vendor/swiper/swiper-bundle.min.css',

        './assets/vendor/purecounter/purecounter_vanilla.js',
        
        "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js",

        "./assets/vendor/glightbox/js/glightbox.min.js",

        "./assets/vendor/isotope-layout/isotope.pkgd.min.js",
        
        "./assets/vendor/swiper/swiper-bundle.min.js",

        "./assets/vendor/waypoints/noframework.waypoints.js",

        './assets/img/footer-bg.png',
        './assets/img/hero-gb.png',
        './assets/img/me.png',
        './assets/img/icon/29.png',
        './assets/img/icon/40.png',
        './assets/img/icon/57.png',
        './assets/img/icon/58.png',
        './assets/img/icon/60.png',
        './assets/img/icon/80.png',
        './assets/img/icon/87.png',
        './assets/img/icon/114.png',
        './assets/img/icon/120.png',
        './assets/img/icon/180.png',
        './assets/img/icon/1024.png',
      ]))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});