// Función validar y enviar formulario
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('post-form');
    const submitBtn = document.getElementById('submit-btn');
    const alertValidaciones = document.getElementById('alertValidaciones');
    const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');
    const alertSuccess = document.getElementById('alertSuccess');
  
    const nameRegex = /^[a-zA-Z\s]+$/; //Unicamente pueden ser letras y espacios
    const usernameRegex = /^[a-zA-Z0-9_-]{5,15}$/; //usuarios que pueden llevar
    const numCelRegex = /^(?!0{10})[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; // Se coloca negación al inicio que indique que no puedan ser puros 0s, y se utiliza función de ihateRegex para utilizar cualquier número de algún país donde se pueda añadir el + y clave lada o solo los 10 dígitos 
    const correoRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/; // expresión ihateregex que indica los posibles patrones de correo.
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/; //regex que indica la extensión de contraseña de 8 a 15 caracteres que debe incluir una minuscula, una mayuscula, un número y un caracter especial.
  
    submitBtn.addEventListener('click', function() {
      let errors = [];
      
      const name = document.getElementById('name').value;
      const username = document.getElementById('username').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('inputPassword1').value;
      const confirmPassword = document.getElementById('inputPassword2').value;
  
      
  
      
      
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