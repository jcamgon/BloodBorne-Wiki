document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (!loginForm) return;

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtener los valores de los campos
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        let isValid = true;

        // Validar el email con RegEx
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            showError("loginEmail", "Por favor, introduce un correo válido.");
            isValid = false;
        } else {
            clearError("loginEmail");
        }

        // Validar la contraseña con RegEx (mínimo 6 caracteres)
        const passwordRegex = /^.{8,}$/;
        if (!passwordRegex.test(password)) {
            showError("loginPassword", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        } else {
            clearError("loginPassword");
        }

        // Si todo es válido, enviar el formulario
        if (isValid) {
            console.log("Formulario válido. Iniciando sesión...");
            loginForm.submit(); // Simula el envío del formulario
        }
    });

    // Función para mostrar mensajes de error
    function showError(inputId, message) {
        const inputField = document.getElementById(inputId);
        let errorElement = inputField.nextElementSibling;

        // Si no existe un mensaje de error, lo crea
        if (!errorElement || !errorElement.classList.contains("error-message")) {
            errorElement = document.createElement("div");
            errorElement.classList.add("error-message");
            inputField.parentNode.appendChild(errorElement);
        }

        errorElement.textContent = message;
        inputField.classList.add("input-error");
    }

    // Función para eliminar mensajes de error
    function clearError(inputId) {
        const inputField = document.getElementById(inputId);
        const errorElement = inputField.nextElementSibling;

        if (errorElement && errorElement.classList.contains("error-message")) {
            errorElement.remove();
        }

        inputField.classList.remove("input-error");
    }
});
