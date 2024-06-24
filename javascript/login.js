document.addEventListener('DOMContentLoaded', function() {
    // Almacenar usuario de prueba en localStorage
    const usuarioPrueba = {
        email: 'delhazsocialmedia@gmail.com',
        password: 'Pa$$w0rd'
    };
    // Almacenar usuario como JSON
    localStorage.setItem('usuarioPrueba', JSON.stringify(usuarioPrueba));

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
        const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioPrueba'));
        const formRegistro = JSON.parse(localStorage.getItem('formRegistro'));

        // Validar usuarios, se utiliza un else if para poder validar tanto la prueba de un usuario como el obtenido en el form registro
        if (email === usuarioGuardado.email && password === usuarioGuardado.password) {
            loginExitoso();
        } else if (formRegistro && email === formRegistro.email && password === formRegistro.password) {
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