// Función para obtener la fecha y hora actual
function getCurrentDateTime() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var dd = String(today.getDate()).padStart(2, '0');
  var hh = String(today.getHours()).padStart(2, '0');
  var min = String(today.getMinutes()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

    // Actualizar el campo de fecha y hora en el formulario
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("timestamp").value = getCurrentDateTime();
    });

    // Función validar y enviar formulario
    document.addEventListener("DOMContentLoaded", function() {
      const form = document.getElementById('post-form');
      const submitBtn = document.getElementById('submit-btn');
      const alertContainer = document.getElementById('alert-container');
      const alertValidaciones = document.getElementById('alertValidaciones');
      const alertText = document.getElementById('alertValidacionesTexto');
    
      const usernameRegex = /^[a-zA-Z0-9_-]{1,15}$/;
      //ihateregex url regex
      const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
      
      submitBtn.addEventListener('click', function() {
        let errors = [];
        
        const username = document.getElementById('username').value.trim();
        const profileImg = document.getElementById('profileImg').value.trim();
        const description = document.getElementById('description').value.trim();
        const img = document.getElementById('img').value.trim();
        const timestamp = document.getElementById('timestamp').value.trim();
        
        // Validación del nombre de usuario
        if (!username) {
          errors.push('El nombre de usuario es obligatorio.');
          document.getElementById('username').classList.add('is-invalid');
        } else if (!usernameRegex.test(username)) {
          errors.push('El nombre de usuario debe tener máximo 15 caracteres y solo puede contener letras, números, guiones y guiones bajos.');
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
          alertText.innerHTML = errors.join('<br>');
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
    
          // Limpiar el formulario
          form.reset();
        }
      });
    });