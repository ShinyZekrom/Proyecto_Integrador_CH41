document.addEventListener('DOMContentLoaded', function() {

    //Constantes para funciones
    const submitBtn = document.getElementById('submit-btn');
    const errorMessage = document.getElementById('errorMessage');
    const alertSuccess = document.getElementById('alertSuccess');
    const alertValidaciones = document.getElementById('alertValidaciones');
    const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');

    // Función del botón para validar compos e iniciar sesión
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('inputPassword').value;

        // Validar campos vacíos 
        if (!email || !password) {
            showAlert('Por favor, complete todos los campos.', 'danger');
            return;
        }

        // Obtener usuarios del localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Buscar usuario que coincida con el email y password
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Guardar información del usuario que ha iniciado sesión
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            loginExitoso();
        } else {
            showAlert('Correo electrónico y/o contraseña incorrectos.', 'danger');
        }
    });

    // Función para redirigir a la página de inicio 
    function loginExitoso() {
        showAlert('¡Inicio de sesión exitoso!', 'success');
        // Redirigir a la página de inicio después de 3 segundos
        setTimeout(() => {
            window.location.href = 'paginaPrincipal.html'; //Ruta correcta a tu página de inicio
        }, 3000);
    }

    // Función para mostrar alertas
    function showAlert(message, type) {
        errorMessage.classList.add('d-none');
        alertSuccess.style.display = 'none';
        alertValidaciones.style.display = 'none';

        if (type === 'success') {
            alertSuccess.style.display = 'block';
            alertSuccess.textContent = message;
        } else if (type === 'danger') {
            alertValidaciones.style.display = 'block';
            alertValidacionesTexto.textContent = message;
        }
    }
});