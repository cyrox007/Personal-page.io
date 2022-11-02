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
