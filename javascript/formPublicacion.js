function getCurrentDateTime() {
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var dd = String(today.getDate()).padStart(2, '0');
    var hh = String(today.getHours()).padStart(2, '0');
    var min = String(today.getMinutes()).padStart(2, '0');

=======
    });

    // Función validar y enviar formulario
    document.addEventListener("DOMContentLoaded", function() {
      const form = document.getElementById('post-form');
      const submitBtn = document.getElementById('submit-btn');
      const alertValidaciones = document.getElementById('alertValidaciones');
      const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');
      const alertSuccess = document.getElementById('alertSuccess');
    
      const usernameRegex = /^[a-z0-9_-]{3,15}$/;
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
          errors.push('El nombre de usuario debe iniciar con letra y tener entre 5 y 15 carácteres, solo puede contener letras y números.');
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
    
<<<<<<< HEAD
>>>>>>> 920641b42fab1d692f33e76784a691c9bb064cfb
=======
>>>>>>> 7db0d1ac658900171e3ce9186eeff48147a88687
