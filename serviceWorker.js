var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        // './assets/css/style.css',

        // './assets/vendor/bootstrap/css/bootstrap.min.css',

        // './assets/vendor/bootstrap-icons/bootstrap-icons.css',

        // './assets/vendor/boxicons/css/boxicons.min.css',

        // './assets/vendor/glightbox/css/glightbox.min.css',

        // './assets/vendor/swiper/swiper-bundle.min.css',

        // './assets/vendor/purecounter/purecounter_vanilla.js',
        
        // "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js",

        // "./assets/vendor/glightbox/js/glightbox.min.js",

        // "./assets/vendor/isotope-layout/isotope.pkgd.min.js",
        
        // "./assets/vendor/swiper/swiper-bundle.min.js",

        // "./assets/vendor/waypoints/noframework.waypoints.js",

        // './assets/img/footer-bg.png',
        // './assets/img/hero-gb.png',
        // './assets/img/me.png',
        // './assets/img/icon/29.png',
        // './assets/img/icon/40.png',
        // './assets/img/icon/57.png',
        // './assets/img/icon/58.png',
        // './assets/img/icon/60.png',
        // './assets/img/icon/80.png',
        // './assets/img/icon/87.png',
        // './assets/img/icon/114.png',
        // './assets/img/icon/120.png',
        // './assets/img/icon/180.png',
        // './assets/img/icon/1024.png',


]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});