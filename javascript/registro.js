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

  function isEmailRegistered(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
  }

  function isUsernameRegistered(username) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.username === username);
  }

  submitBtn.addEventListener('click', function() {
    let errors = [];
    
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const profileImg = document.getElementById('profileImg').value;
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
      errors.push('* El nombre de usuario es obligatorio');
      document.getElementById('username').classList.add('is-invalid');
    } else if (!usernameRegex.test(username)) {
      errors.push('* El nombre de usuario debe contener entre 5 y 15 caracteres solo se permiten guiones y guiones bajos. Ej: Delhaz_1, Delhaz-1');
      document.getElementById('username').classList.add('is-invalid');
    } else if (isUsernameRegistered(username)) {
      errors.push('* Este nombre de usuario ya está registrado');
      document.getElementById('username').classList.add('is-invalid');
    } else {
      document.getElementById('username').classList.remove('is-invalid');
    }

    // Validación imagen de perfil
    if (!profileImg) {
      errors.push('* La imagen de perfil es obligatoria');
      document.getElementById('profileImg').classList.add('is-invalid');
    } else if (!urlRegex.test(profileImg)) {
      errors.push('* La URL de la imagen de perfil no es válida');
      document.getElementById('profileImg').classList.add('is-invalid');
    } else {
      document.getElementById('profileImg').classList.remove('is-invalid');
    }

    // Validación teléfono
    if (!phone) {
      errors.push('* Número de celular obligatorio');
      document.getElementById('phone').classList.add('is-invalid');
    } else if (!numCelRegex.test(phone)) {
      errors.push('* Coloca un número válido');
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
    } else if (isEmailRegistered(email)) {
      errors.push('* Este correo electrónico ya está registrado');
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
      if (isEmailRegistered(email) || isUsernameRegistered(username)) {
        alertValidaciones.style.display = 'block';
        let errorMessage = '';
        if (isEmailRegistered(email)) {
          errorMessage += '* Este correo electrónico ya está registrado<br>';
        }
        if (isUsernameRegistered(username)) {
          errorMessage += '* Este nombre de usuario ya está registrado';
        }
        alertValidacionesTexto.innerHTML = errorMessage;
        alertSuccess.style.display = 'none';
      } else {
        alertValidaciones.style.display = 'none';
        
        // Crear objeto con la información del formulario
        const newUser = {
          name: name,
          username: username,
          profileImg: profileImg,
          phone: phone,
          email: email,
          password: password,
        };
        
        // Obtener usuarios existentes o crear un nuevo array
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Añadir el nuevo usuario
        users.push(newUser);
        
        // Guardar el array actualizado en LocalStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        console.log("Usuarios registrados:", JSON.stringify(users));
        
        // Limpiar el formulario
        form.reset();

        // Mostrar mensaje de éxito
        alertSuccess.style.display = 'block';
      }
    }
  });
});