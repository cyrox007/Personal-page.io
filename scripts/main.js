portfolio = {};
portfolio.main = {
    data: {
        mobileBtn: document.getElementById('mobile-btn'),
        navigate: document.querySelector('nav'),
    },
    func: {
        getLinksNav: (navigate) => {
            return navigate.querySelectorAll('a');
        },
    },
};

(function () {
    portfolio.main.data.mobileBtn.addEventListener('click', () => {
        portfolio.main.data.navigate.classList.toggle('visible');
        portfolio.main.data.mobileBtn.classList.toggle('active');
    });
    portfolio.main.func.getLinksNav(portfolio.main.data.navigate).forEach(element => {
        element.addEventListener('click', (e)=>{
            portfolio.main.data.navigate.classList.toggle('visible');
            portfolio.main.data.mobileBtn.classList.toggle('active');
        });
    });
    ;
}());
/* 
let mobileBtn = document.getElementById('mobile-btn');
let navigate = document.querySelector('nav');

document.addEventListener('DOMContentLoaded', () => {
    mobileBtn.addEventListener('click', () => {
        navigate.classList.toggle('visible');
        mobileBtn.classList.toggle('active');
    });
});
 */