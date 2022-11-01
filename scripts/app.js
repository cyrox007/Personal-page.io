if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/scripts/sw.js')
    .then((reg) => {
      console.log('Registration succeeded. Scope is ' + reg.scope);
    })
    .catch((err) => {
      console.log('Registration failed with ' + err);
    });
  }