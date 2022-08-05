document.addEventListener('DOMContentLoaded', ()=>{
    let header = document.querySelector('header');

    console.log(header);

    document.addEventListener('scroll', ()=>{
        if (window.scrollY > 0) {
            header.style.background = '#FFFFFF'
        } else {
            header.style.background = 'none'
        }
    });

    let navigation = document.querySelector('.header__nav');
    let navBtn = document.getElementById('mobile-btn');

    navBtn.addEventListener('click', ()=>{
        navigation.classList.toggle('visible');
        navBtn.classList.toggle('active');
    });
});