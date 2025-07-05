document.addEventListener('DOMContentLoaded', function() {
    // --- Validación de formulario ---
    const form = document.getElementById('contactForm');
    if (form) {
        const nombre = form.elements['nombre'];
        const apellido = form.elements['apellido'];
        const email = form.elements['email'];
        const mensaje = form.elements['mensaje'];

        let msgContainer = document.createElement('div');
        msgContainer.id = 'form-msg';
        msgContainer.style.marginTop = '20px';
        msgContainer.style.fontSize = '18px';
        form.parentNode.insertBefore(msgContainer, form.nextSibling);

        function resetFieldStyles() {
            [nombre, apellido, email, mensaje].forEach(field => {
                field.style.borderBottom = '1px solid white';
                field.style.backgroundColor = 'transparent';
            });
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let errores = [];
            resetFieldStyles();

            // Validación nombre
            if (!nombre.value.trim()) {
                errores.push('El nombre es obligatorio.');
                nombre.style.borderBottom = '2px solid red';
                nombre.style.backgroundColor = '#ffdddd';
            } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre.value.trim())) {
                errores.push('El nombre solo debe contener letras.');
                nombre.style.borderBottom = '2px solid red';
                nombre.style.backgroundColor = '#ffdddd';
            } else if (nombre.value.trim().length < 2) {
                errores.push('El nombre debe tener al menos 2 caracteres.');
                nombre.style.borderBottom = '2px solid red';
                nombre.style.backgroundColor = '#ffdddd';
            }
            // Validación apellido
            if (!apellido.value.trim()) {
                errores.push('El apellido es obligatorio.');
                apellido.style.borderBottom = '2px solid red';
                apellido.style.backgroundColor = '#ffdddd';
            } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(apellido.value.trim())) {
                errores.push('El apellido solo debe contener letras.');
                apellido.style.borderBottom = '2px solid red';
                apellido.style.backgroundColor = '#ffdddd';
            } else if (apellido.value.trim().length < 2) {
                errores.push('El apellido debe tener al menos 2 caracteres.');
                apellido.style.borderBottom = '2px solid red';
                apellido.style.backgroundColor = '#ffdddd';
            }
            if (!email.value.trim()) {
                errores.push('El email es obligatorio.');
                email.style.borderBottom = '2px solid red';
                email.style.backgroundColor = '#ffdddd';
            } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
                errores.push('El email no es válido.');
                email.style.borderBottom = '2px solid red';
                email.style.backgroundColor = '#ffdddd';
            }
            if (!mensaje.value.trim()) {
                errores.push('El mensaje es obligatorio.');
                mensaje.style.borderBottom = '2px solid red';
                mensaje.style.backgroundColor = '#ffdddd';
            }

            if (errores.length > 0) {
                msgContainer.textContent = errores.join(' ');
                msgContainer.style.color = 'red';
            } else {
                msgContainer.textContent = '¡Mensaje enviado correctamente!';
                msgContainer.style.color = 'green';
                form.reset();
                resetFieldStyles();
                setTimeout(() => {
                    msgContainer.textContent = '';
                }, 3500);
            }
        });

        [nombre, apellido, email, mensaje].forEach(field => {
            field.addEventListener('input', function() {
                if (field.value.trim()) {
                    field.style.borderBottom = '1px solid white';
                    field.style.backgroundColor = 'transparent';
                }
            });
        });
    }
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    fadeEls.forEach(el => observer.observe(el));
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});