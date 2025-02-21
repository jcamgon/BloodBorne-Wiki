$(document).ready(function () {
    // Mensajes de error personalizados en español
    $.extend($.validator.messages, {
        required: "Este campo es obligatorio.",
        email: "Por favor, introduce una dirección de correo válida.",
        minlength: "Por favor, introduce al menos {0} caracteres.",
        equalTo: "Las contraseñas no coinciden."
    });

    // Método personalizado para validar el formato de la contraseña
    $.validator.addMethod("passwordFormat", function (value, element) {
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
    }, "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.");

    // Método personalizado para validar el nombre de usuario
    $.validator.addMethod("usernameFormat", function (value, element) {
        return this.optional(element) || /^[a-zA-Z0-9_]{3,20}$/.test(value);
    }, "El nombre de usuario debe tener entre 3 y 20 caracteres y solo puede contener letras, números y guiones bajos.");

    // Configuración de la validación
    $("#registerForm").validate({
        // Reglas de validación
        rules: {
            username: {
                required: true,
                minlength: 3,
                usernameFormat: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                passwordFormat: true
            },
            confirmPassword: {
                required: true,
                equalTo: "#registerPassword"
            }
        },
        // Clases para elementos con error
        errorClass: "error",
        validClass: "valid",
        // Función que se ejecuta cuando se añade un error
        highlight: function (element, errorClass, validClass) {
            $(element)
                .addClass(errorClass)
                .removeClass(validClass);
            $(element).closest('.form-group').addClass('has-error');
        },
        // Función que se ejecuta cuando se elimina un error
        unhighlight: function (element, errorClass, validClass) {
            $(element)
                .removeClass(errorClass)
                .addClass(validClass);
            $(element).closest('.form-group').removeClass('has-error');
        },
        // Manejador del envío del formulario
        submitHandler: function (form) {
            // Aquí iría el código para enviar el formulario
            console.log("Formulario válido, listo para enviar");
            // Cerrar el modal después de enviar
            $('#registerModal').hide();
            // Limpiar el formulario
            form.reset();
        }
    });
});
