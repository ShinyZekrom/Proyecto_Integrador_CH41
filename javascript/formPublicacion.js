// Función para obtener la fecha y hora actual
function getCurrentDateTime() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = String(today.getMonth() + 1); // Enero inicia en 0
  var dd = String(today.getDate());
  var hh = String(today.getHours());
  var min = String(today.getMinutes()).padStart(2, '0');

//Se obtiene la fecha a través de date para obtenerla completa
  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

    // Actualiza el campo de fecha y hora en el formulario
    // este se ejecuta cuando el DOM ha sido cargado y busca al
    // elemento con el id "timestamp" y establece su valor con la fecha y hora actual.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("timestamp").value = getCurrentDateTime();
    });

    // Función validar y enviar formulario
    document.addEventListener("DOMContentLoaded", function() {
      const form = document.getElementById('post-form');
      const submitBtn = document.getElementById('submit-btn');
      const alertValidaciones = document.getElementById('alertValidaciones');
      const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');
      const alertSuccess = document.getElementById('alertSuccess');
    
      const usernameRegex = /^[a-zA-Z0-9]{5,10}$/;
      const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    
      submitBtn.addEventListener('click', function() {
        let errors = [];
        
        const username = document.getElementById('username').value.trim();
        const profileImg = document.getElementById('profileImg').value.trim();
        const description = document.getElementById('description').value.trim();
        const img = document.getElementById('img').value.trim();
        const timestamp = new Date().toLocaleString(); // Obtener fecha y hora actual
        
        // Validación del nombre de usuario
        if (!username) {
          errors.push('El nombre de usuario es obligatorio.');
          document.getElementById('username').classList.add('is-invalid');
        } else if (!usernameRegex.test(username)) {
          errors.push('El nombre de usuario debe iniciar con letra y tener 3ntre 5 y 10 carácteres, solo puede contener letras y números.');
          document.getElementById('username').classList.add('is-invalid');
        } else {
          document.getElementById('username').classList.remove('is-invalid');
        }
        
        // Validación de la descripción
        if (!description) {
          errors.push('La descripción es obligatoria.');
          document.getElementById('description').classList.add('is-invalid');
        } else {
          document.getElementById('description').classList.remove('is-invalid');
        }
    
        // Validación de la imagen de perfil
        if (profileImg && !urlRegex.test(profileImg)) {
          errors.push('La URL de la imagen de perfil no es válida.');
          document.getElementById('profileImg').classList.add('is-invalid');
        } else {
          document.getElementById('profileImg').classList.remove('is-invalid');
        }
    
        // Validación de la imagen/video
        if (img && !urlRegex.test(img)) {
          errors.push('La URL de la imagen/video no es válida.');
          document.getElementById('img').classList.add('is-invalid');
        } else {
          document.getElementById('img').classList.remove('is-invalid');
        }
    
        if (errors.length > 0) {
          alertValidaciones.style.display = 'block';
          alertValidacionesTexto.innerHTML = errors.join('<br>');
          alertSuccess.style.display = 'none';
        } else {
          alertValidaciones.style.display = 'none';
          
          // Crear objeto JSON con la información del formulario
          const formData = {
            username: username,
            profileImg: profileImg,
            timestamp: timestamp,
            description: description,
            img: img
          };
          
          console.log("Datos del formulario en formato JSON:", JSON.stringify(formData));

    
          // Guardar el objeto actualizado en LocalStorage
          localStorage.setItem('formData', JSON.stringify(formData));
          
          // Limpiar el formulario
          form.reset();
    
          // Mostrar mensaje de éxito
          alertSuccess.style.display = 'block';
        }
      });
    });
    
