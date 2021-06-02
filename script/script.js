document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector(".nav-main-menu").classList.toggle("show");
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.newsCards', {delay: 500});
ScrollReveal().reveal('.banner' , {delay: 500});
ScrollReveal().reveal('.banner-two' , {delay: 500});
ScrollReveal().reveal('.social' , {delay: 500});
ScrollReveal().reveal('.footer-links' , {delay: 100});