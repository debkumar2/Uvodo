ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 250
});
ScrollReveal().reveal('.banner h1', { delay: 200, origin: 'left' });
// ScrollReveal().reveal('.banner h5,.banner a,.banner h6', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.bg-video', { delay: 250, origin: 'bottom' });
ScrollReveal().reveal('.different h2', { delay: 250, origin: 'left' });
ScrollReveal().reveal('.marchant h2', { delay: 250, origin: 'right' });
ScrollReveal().reveal('.industry h2', { delay: 250, origin: 'left' });
ScrollReveal().reveal('.customer h2', { delay: 250, origin: 'right' });
ScrollReveal().reveal('.left-light-speed', { delay: 250, origin: 'top' });
ScrollReveal().reveal('.right-light-speed img', { delay: 250, origin: 'bottom' });
ScrollReveal().reveal('.customer-card', { delay: 250, origin: 'top' });
ScrollReveal().reveal('.main-industry', { delay: 250, origin: 'bottom' });
ScrollReveal().reveal('.marchant-img', { delay: 250, origin: 'top' });
ScrollReveal().reveal('.business-card', { delay: 250, origin: 'bottom' });


window.addEventListener('scroll', function () {
    var header = document.getElementById('main-header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 150) {
        header.classList.add('fixed-border');
    } else {
        header.classList.remove('fixed-border');
    }
});

let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.nav-links');
hamburger.onclick = () => {
    navbar.classList.toggle('active');
}
