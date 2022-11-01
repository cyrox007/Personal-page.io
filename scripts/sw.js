const CACHE_NAME = "my-web-app";
let urlCache = [
  "/",
  "/style/style.css",
  "/scripts/main.js",
  "/images/main-bg.webp",
  "/images/black.webp",
  "/images/blog.webp",
  "/images/page.webp",
  "/images/store.webp",
  "/video/2.webm",
];
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
  );
});

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});
/* if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/scripts/sw.js").then(
      (registration) => {
        
      },
      (err) => {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

let CACHE_NAME = "my-web-app";
let urlCache = [
  "/",
  "/style/style.css",
  "/scripts/main.js",
  "/images/main-bg.webp",
  "/images/black.webp",
  "/images/blog.webp",
  "/images/page.webp",
  "/images/store.webp",
  "/video/2.webm",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlCache);
    })
  );
}); */