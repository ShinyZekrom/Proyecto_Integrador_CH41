document.addEventListener('DOMContentLoaded', function() {

    // Almacenar usuario de prueba en localStorage
    const usuarioPrueba = {
        email: 'delhazsocialmedia@gmail.com',
        password: 'Pa$$w0rd'
    };
    localStorage.setItem('usuarioPrueba', JSON.stringify(usuarioPrueba));

    const submitBtn = document.getElementById('submit-btn');
    const errorMessage = document.getElementById('errorMessage');
    const alertSuccess = document.getElementById('alertSuccess');
    const alertValidaciones = document.getElementById('alertValidaciones');
    const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('inputPassword').value;

        // Validar campos vacíos
        if (!email || !password) {
            showAlert('Por favor, complete todos los campos.', 'danger');
            return;
        }

        // Obtener usuario del localStorage
        const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioPrueba'));

        // Validar credenciales
        if (email === usuarioGuardado.email && password === usuarioGuardado.password) {
            showAlert('¡Inicio de sesión exitoso!', 'success');
            // Redirigir a la página de inicio después de 3 segundos
            setTimeout(() => {
                window.location.href = 'paginaPrincipal.html'; //Ruta correcta a tu página de inicio
            }, 3000);
        } else {
            showAlert('Correo electrónico y/o contraseña incorrectos.', 'danger');
        }
    });

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