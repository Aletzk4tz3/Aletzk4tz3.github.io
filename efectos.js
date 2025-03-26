document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.createElement("button");
    modeToggle.id = "modeToggle";
    modeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Ícono de luna por defecto
    modeToggle.classList.add("mode-toggle-button"); // Agregar una clase específica
    document.body.appendChild(modeToggle);

    modeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        
        // Cambiar el ícono
        if (document.body.classList.contains("dark-mode")) {
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sol en modo oscuro
        } else {
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Luna en modo claro
        }
    });

    // Efecto de scroll en la navegación
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Animaciones en la carga de secciones
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // Cambio de color en la cabecera
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Efecto de partículas
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.fill();
            ctx.closePath();
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
});
