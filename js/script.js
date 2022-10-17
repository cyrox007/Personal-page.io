document.addEventListener('DOMContentLoaded', ()=>{
    let header = document.querySelector('header');

    document.addEventListener('scroll', ()=>{
        if (window.scrollY > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });

    let navigation = document.querySelector('.header__nav');
    let navBtn = document.getElementById('mobile-btn');

    navBtn.addEventListener('click', ()=>{
        navigation.classList.toggle('visible');
        navBtn.classList.toggle('active');
    });
});