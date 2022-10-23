if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/scripts/sw.js').then((registration) => {
            let CACHE_NAME = 'my-web-app';
            let urlCache = [
                '/',
                '/style/style.css',
                '/scripts/main.js',
                '/images/main-bg.webp',
                '/images/black.webp',
                '/images/blog.webp',
                '/images/page.webp',
                '/images/store.webp',
                '/video/1.webm'
            ];

            self.addEventListener("install", function (event) {
            event.waitUntil(
                caches.open(CACHE_NAME).then(function (cache) {
                console.log("Opened cache");
                return cache.addAll(urlCache);
                })
            );
            });
        }, (err) => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
