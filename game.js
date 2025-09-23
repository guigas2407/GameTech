const btn = document.querySelector('.nav .hamburger');
const mobile = document.getElementById('mobileMenu');

btn?.addEventListener('click', () => {
    const isOpen = mobile.classList.toggle('active');
    btn.setAttribute('aria-expanded', String(isOpen));
});


const container = document.getElementById('games');
const slides = document.querySelectorAll('.game');
let index = 0;

function goToSlide(i) {
    if (i < 0 || i >= slides.length) return;
    index = i;
    container.scrollTo({
        left: slides[i].offsetLeft,
        behavior: 'smooth'
    });
}

document.getElementById('next').addEventListener('click', () => goToSlide(index + 1));
document.getElementById('prev').addEventListener('click', () => goToSlide(index - 1));