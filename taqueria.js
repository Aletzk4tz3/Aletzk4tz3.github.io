// taqueria.js

// Efecto de Parallax para las imágenes al hacer scroll
const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    parallaxElements.forEach((el) => {
        el.style.backgroundPositionY = offset * 0.3 + 'px';
    });
});

// Efecto de escritura en el título
const title = document.querySelector('.typing-effect');
const text = title.textContent;
let index = 0;

function typeWriter() {
    if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
});

// Animación al cargar la página para las secciones
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// Animación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    sections.forEach((section) => {
        section.classList.add('hidden');
    });
});
