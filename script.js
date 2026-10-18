
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

// Abrir y cerrar el menú
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

// Navegación entre secciones
navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navItems.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

// Formulario de consultas
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const tipo = document.querySelector("#tipo").value;
    const mensaje = document.querySelector("#mensaje").value.trim();
    const respuesta = document.querySelector("#respuesta");

    respuesta.textContent =
        `¡Gracias, ${nombre}! Tu consulta sobre ${tipo.toLowerCase()} quedó preparada.`;

    if (mensaje !== "") {
        respuesta.textContent +=
            " Tu mensaje fue ingresado correctamente.";
    }
});