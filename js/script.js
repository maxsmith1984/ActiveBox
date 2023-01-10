let header = document.querySelector('#header');
let intro = document.querySelector('#intro');
let introH = intro.offsetHeight;
let scrollPos = window.scrollY;


window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    nav.classList.remove('show');
    if(scrollPos >= introH - 70) {
        header.classList.add('fix')
    } else {
        header.classList.remove('fix');
    }

});

window.addEventListener('resize', function() {
    introH = intro.offsetHeight;
    let scrollPos = window.scrollY;
    if(scrollPos >= introH - 70) {
        header.classList.add('fix')
    } else {
        header.classList.remove('fix');
    }

});

window.addEventListener('load', function() {
    introH = intro.offsetHeight;
    let scrollPos = window.scrollY;
    if(scrollPos >= introH - 70) {
        header.classList.add('fix')
    } else {
        header.classList.remove('fix');
    }

});


const links = document.querySelectorAll('[data-scroll]');
if (links.length > 0) {
    links.forEach(links => {
        links.addEventListener('click', onMenuClick);
    });

    function onMenuClick(e) {
        const links = e.target;
        if(links.dataset.scroll && document.querySelector(links.dataset.scroll)) {
            const scrollBlock = document.querySelector(links.dataset.scroll);
            const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight - 5;

            window.scrollTo({
                top: scrollBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
            nav.classList.remove('show');
        }
    }
}




const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('#nav');
const navClass = document.querySelector('.nav');

navToggle.addEventListener('click', function(event){
    event.preventDefault();
    nav.classList.toggle('show');

});


const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    simulateTouch: false,
    loop: true,
});

















