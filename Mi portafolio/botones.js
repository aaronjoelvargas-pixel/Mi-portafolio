document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn-contacto');
    const form = document.getElementById('form-contacto');
    const sections = document.querySelectorAll('.section-animada');

    // Mostrar/ocultar formulario
    if(btn && form) {
        btn.addEventListener('click', function() {
            form.classList.toggle('form-visible');
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Formulario enviado! Gracias por contactarme.');
            form.reset();
            form.classList.remove('form-visible');
        });
    }

    // Animación al hacer scroll
    function mostrarSecciones() {
        sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            const ventana = window.innerHeight;
            if(top < ventana - 100) {  // cuando entra en pantalla
                sec.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', mostrarSecciones);
    mostrarSecciones(); // inicial
});