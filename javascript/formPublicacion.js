// Función para obtener la fecha y hora actual
function getCurrentDateTime() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = String(today.getMonth() + 1); // Enero inicia en 0
  var dd = String(today.getDate());
  var hh = String(today.getHours());
  var min = String(today.getMinutes());

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
      const alertContainer = document.getElementById('alert-container');
      const alertValidaciones = document.getElementById('alertValidaciones');
      const alertText = document.getElementById('alertValidacionesTexto');
    
      //Se crean constantes con las expresiones regulares para utilizarlas en las validaciones.
      const usernameRegex = /^[a-zA-Z0-9_-]{1,15}$/;
      //ihateregex url regex
      const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
      
      submitBtn.addEventListener('click', function() { //evento del boton
        let errors = [];
        //utilizamos el value.trim() oara eliminar espacios en blanco al principio y final de la cadena
        const username = document.getElementById('username').value.trim();
        const profileImg = document.getElementById('profileImg').value.trim();
        const description = document.getElementById('description').value.trim();
        const img = document.getElementById('img').value.trim();
        const timestamp = document.getElementById('timestamp').value.trim();
        
        // Validación del nombre de usuario
        if (!username) { //verifica si el campo de usuario esta vacio
          errors.push('El nombre de usuario es obligatorio.');
          document.getElementById('username').classList.add('is-invalid');
        } else if (!usernameRegex.test(username)) { // verficia si lo ingresado no cumple con la regex y si es aspu manda mensaje de error
          errors.push('El nombre de usuario debe tener máximo 15 caracteres y solo puede contener letras, números, guiones y guiones bajos.');
          document.getElementById('username').classList.add('is-invalid');
        } else { // si no hay erroreres remueve algún error previo del campo
          document.getElementById('username').classList.remove('is-invalid');
        }
        
        // Validación de la descripción
        if (!description) { // verifica si el campo de descripción está vacio
          errors.push('La descripción es obligatoria.'); // si es así manda mansaje de error
          document.getElementById('description').classList.add('is-invalid'); // y marca como invalido el campo
        } else { //Si no hay errores remueve errores previos del campo para continuar con la validación
          document.getElementById('description').classList.remove('is-invalid');
        }
    
        // Validación de la imagen de perfil
        if (profileImg && !urlRegex.test(profileImg)) { //si el campo no está vacio y no cumple con la regex
          errors.push('La URL de la imagen de perfil no es válida.'); //manda un mensaje de error
          document.getElementById('profileImg').classList.add('is-invalid');// e invalida el campo
        } else { // si no hay errores
          document.getElementById('profileImg').classList.remove('is-invalid'); //remueve los errores previos del campo
        }
    
        // Validación de la imagen/video
        if (img && !urlRegex.test(img)) { //si el campo no está vacio y no cumple con la regex
          errors.push('La URL de la imagen/video no es válida.'); //manda un mensaje de error
          document.getElementById('img').classList.add('is-invalid'); // e invalida el campo
        } else { // si no hay errores
          document.getElementById('img').classList.remove('is-invalid'); //remueve los errores previos del campo
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


        //Guardar el objeto JSON en localStorage
        localStorage.setItem(`formData`, JSON.stringify(formData));
    
          // Limpiar el formulario
          form.reset();
        }
      });
    });