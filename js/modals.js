document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');

    document.body.addEventListener('click', (event) => {
        const target = event.target;

        // Abrir modales
        if (target.matches('#loginBtn')) {
            document.getElementById('loginModal')?.classList.add('active');
        } else if (target.matches('#registerBtn')) {
            document.getElementById('registerModal')?.classList.add('active');
        }

        // Cerrar modales
        if (target.matches('.close-modal')) {
            const modalId = target.getAttribute('data-modal');
            document.getElementById(modalId)?.classList.remove('active');
        }

        // Cerrar modal al hacer click fuera de él
        modals.forEach(modal => {
            if (target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Prevenir envío de formularios (para demo)
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Login submitted');
    });

    document.getElementById('registerForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Register submitted');
    });
});
