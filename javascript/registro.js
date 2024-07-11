// Función validar y enviar formulario
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('post-form');
  const submitBtn = document.getElementById('submit-btn');
  const alertValidaciones = document.getElementById('alertValidaciones');
  const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');
  const alertSuccess = document.getElementById('alertSuccess');

  const nameRegex = /^[a-zA-Z\s]+$/; //Unicamente pueden ser letras y espacios
  const usernameRegex = /^[a-zA-Z0-9_-]{5,15}$/;  //usuarios que pueden llevar mayus, minus, un guíon bajo y un guíon medio
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/; //Regex de una URL para que el usuario deba utilizar una imagen y no escribir cualquier cosa en el campo
  const numCelRegex = /^(?!01)(?!0{2,})(?!0{3,})(?!0{4,})(?!0{5,})(?!0{6,})(?!0{7,})(?!0{8,})(?!0{9,})(?!0+$)[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ // Se coloca negación al inicio que indique que no puedan ser puros 0s, y se utiliza función de ihateRegex para utilizar cualquier número de algún país donde se pueda añadir el + y clave lada o solo los 10 dígitos 
  const correoRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/; // expresión ihateregex que indica los posibles patrones de correo.
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/; //regex que indica la extensión de contraseña de 8 a 15 caracteres que debe incluir una minuscula, una mayuscula, un número y un caracter especial.

  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let errors = [];
    
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const profileImg = document.getElementById('profileImg').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('inputPassword1').value;
    const confirmPassword = document.getElementById('inputPassword2').value;

    // Función para manejar errores de campo
    function setFieldError(fieldId, errorMessage) {
      const field = document.getElementById(fieldId);
      field.classList.add('is-invalid');
      const errorDiv = document.getElementById(fieldId + 'Error');
      if (errorDiv) {
        errorDiv.textContent = errorMessage;
      }
      errors.push(errorMessage);
    }

    // Validación nombre
    if (!name || !nameRegex.test(name)) {
      setFieldError('name', 'Nombre inválido');
    } else {
      document.getElementById('name').classList.remove('is-invalid');
      document.getElementById('nameError').textContent = '';
    }

    // Validación usuario
    if (!username || !usernameRegex.test(username)) {
      setFieldError('username', 'El nombre de usuario debe contener entre 5 y 15 caracteres, solo se permiten guiones y guiones bajos.');
    } else {
      document.getElementById('username').classList.remove('is-invalid');
      document.getElementById('username-error').textContent = '';
    }

    // Validación imagen de perfil
    if (!profileImg || !urlRegex.test(profileImg)) {
      setFieldError('profileImg', 'La URL de la imagen de perfil no es válida');
    } else {
      document.getElementById('profileImg').classList.remove('is-invalid');
    }

    // Validación teléfono
    if (!phone || !numCelRegex.test(phone)) {
      setFieldError('phone', 'Número de teléfono inválido');
    } else {
      document.getElementById('phone').classList.remove('is-invalid');
      document.getElementById('phoneError').textContent = '';
    }
    
    // Validación del correo
    if (!email || !correoRegex.test(email)) {
      setFieldError('email', 'Correo electrónico inválido');
    } else {
      document.getElementById('email').classList.remove('is-invalid');
      document.getElementById('emailError').textContent = '';
    }

    // Validación contraseña
    if (!password || !passwordRegex.test(password)) {
      setFieldError('inputPassword1', 'La contraseña debe contener mínimo 8 caracteres incluyendo una mayúscula, una minúscula, un número y un caracter especial.');
    } else {
      document.getElementById('inputPassword1').classList.remove('is-invalid');
    }

    // Validación confirmar contraseña
    if (!confirmPassword || confirmPassword !== password) {
      setFieldError('inputPassword2', 'Las contraseñas no coinciden');
    } else {
      document.getElementById('inputPassword2').classList.remove('is-invalid');
    }

    // Mostrar los errores o enviar el formulario
    if (errors.length > 0) {
      alertValidaciones.style.display = 'block';
      alertValidacionesTexto.innerHTML = errors.join('<br>');
      alertSuccess.style.display = 'none';
    } else {
      alertValidaciones.style.display = 'none';
      
      const newUser = {
        nombre: name,
        username: username,
        email: email,
        password: password,
        fechaRegistro: new Date().toISOString(),
        fotoPerfil: profileImg,
        telefono: phone
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      };

      // Mostrar estado de cargando
      submitBtn.disabled = true;
      submitBtn.textContent = 'Registrando...';

      //vinculación con BD
      fetch("http://localhost:8080/api/usuarios/", requestOptions)
        .then(response => {
          if (!response.ok) {
            return response.json().then(err => {
              throw new Error(err.message || 'Error en la respuesta del servidor');
            });
          }
          return response.json();
        })
        .then(data => {
          console.log('Usuario registrado:', data);
          form.reset();
          alertSuccess.style.display = 'block';
          alertSuccess.textContent = '¡Usuario registrado con éxito!';

        })
        .catch(error => {
          console.error('Error:', error);
          alertValidaciones.style.display = 'block';
          
          if (error.message.includes('email ya registrado')) {
            setFieldError('email', 'Este correo electrónico ya está registrado.');
          } else if (error.message.includes('nombre de usuario ya registrado')) {
            setFieldError('username', 'Este nombre de usuario ya está registrado.');
          } else {
            alertValidacionesTexto.innerHTML = `Error al registrar el usuario: ${error.message}`;
          }
        })
        .finally(() => {
          // Restaurar el botón
          submitBtn.disabled = false;
          submitBtn.textContent = 'Regístrate';
        });
    }
  });
});