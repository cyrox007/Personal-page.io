self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        "style/style.css",
        "scripts/main.js",
        "images/main-bg.webp",
        "images/black.webp",
        "images/blog.webp",
        "images/page.webp",
        "images/store.webp",
        "video/2.webm",
      ]);
    })
  );
});
/* self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request));
}); */
