// Función validar y enviar formulario
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('post-form');
  const submitBtn = document.getElementById('submit-btn');
  const alertValidaciones = document.getElementById('alertValidaciones');
  const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');
  const alertSuccess = document.getElementById('alertSuccess');

  const nameRegex = /^[a-zA-Z\s]+$/;
  const usernameRegex = /^[a-zA-Z0-9_-]{5,15}$/; //usuarios que pueden llevar
  const numCelRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; //{10} significa que solo pueden ser 10 números
  const correoRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/; 
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  submitBtn.addEventListener('click', function() {
    let errors = [];
    
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('inputPassword1').value;
    const confirmPassword = document.getElementById('inputPassword2').value;

    // Validación nombre
    if (!name) {
      errors.push('* Coloca tu nombre correctamente');
      document.getElementById('name').classList.add('is-invalid');
    } else if (!nameRegex.test(name)) {
      errors.push('* Nombre inválido');
      document.getElementById('name').classList.add('is-invalid');
    } else {
      document.getElementById('name').classList.remove('is-invalid');
    }

    // Validación usuario
    if (!username) {
      errors.push('* El nombre de usuario es obligatorio.');
      document.getElementById('username').classList.add('is-invalid');
    } else if (!usernameRegex.test(username)) {
      errors.push('* El nombre de usuario debe contener entre 5 y 15 caracteres solo se permiten guiones y guiones bajos. Ej: Delhaz_1, Delhaz-1');
      document.getElementById('username').classList.add('is-invalid');
    } else {
      document.getElementById('username').classList.remove('is-invalid');
    }

    // Validación teléfono
    if (!phone) {
      errors.push('* Número de celular obligatorio');
      document.getElementById('phone').classList.add('is-invalid');
    } else if (!numCelRegex.test(phone)) {
      errors.push('* Coloca tu número a 10 dígitos');
      document.getElementById('phone').classList.add('is-invalid');
    } else {
      document.getElementById('phone').classList.remove('is-invalid');
    }
    
    // Validación del correo
    if (!email) {
      errors.push('* Correo electrónico obligatorio');
      document.getElementById('email').classList.add('is-invalid');
    } else if (!correoRegex.test(email)) {
      errors.push('* Correo inválido');
      document.getElementById('email').classList.add('is-invalid');
    } else {
      document.getElementById('email').classList.remove('is-invalid');
    }

    // Validación contraseña
    if (!password) {
      errors.push('* Se requiere una contraseña');
      document.getElementById('inputPassword1').classList.add('is-invalid');
    } else if (!passwordRegex.test(password)) {
      errors.push('* La contraseña debe contener mínimo 8 caracteres incluyendo una mayúscula, una minúscula, un número y un caracter especial.');
      document.getElementById('inputPassword1').classList.add('is-invalid');
    } else {
      document.getElementById('inputPassword1').classList.remove('is-invalid');
    }

    // Validación confirmar contraseña
    if (!confirmPassword) {
      errors.push('* Se requiere confirmar la contraseña');
      document.getElementById('inputPassword2').classList.add('is-invalid');
    } else if (confirmPassword !== password) {
      errors.push('* Las contraseñas no coinciden');
      document.getElementById('inputPassword2').classList.add('is-invalid');
    } else {
      document.getElementById('inputPassword2').classList.remove('is-invalid');
    }

    // Mostrar los errores
    if (errors.length > 0) {
      alertValidaciones.style.display = 'block';
      alertValidacionesTexto.innerHTML = errors.join('<br>');
      alertSuccess.style.display = 'none';
    } else {
      alertValidaciones.style.display = 'none';
      
      // Crear objeto JSON con la información del formulario
      const formRegistro = {
        name: name,
        username: username,
        phone: phone,
        email: email,
        password: password,
      };
      
      console.log("Datos del formulario en formato JSON:", JSON.stringify(formRegistro));

      // Guardar el objeto actualizado en LocalStorage
      localStorage.setItem('formRegistro', JSON.stringify(formRegistro));
      
      // Limpiar el formulario
      form.reset();

      // Mostrar mensaje de éxito
      alertSuccess.style.display = 'block';
    }
  });
});