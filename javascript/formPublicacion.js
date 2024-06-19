<<<<<<< HEAD

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

function validateForm() {
 
 // Valores de los campos del formulario
const formulario = document.getElementById("form")
const name = document.getElementById("username").value; 
const URLimg= document.getElementById("profileImg").value; 
const message = document.getElementById("message").value; 
const URLimage = document.getElementById("img").value; 
const btnPublicar = document.getElementById("submit-btn"); 

const nameError = document.getElementById("usernameError");
const URLerror = document.getElementById("profileImg");
const imgError = document.getElementById("img");

const alertMessage = document.getElementById("alertMessage");

 // Inicializar validación
 let Isvalid = true;

  // Resetear mensajes de error cuando esté correcto
  nameError.textContent = "";
  URLerror.textContent = "";
  imgError.textContent = "";

 // Validar nombre
 const patronNombre = /^[a-zA-Z\s]+$/; 
 if (!patronNombre.test(name)) {
   nameError.textContent = "Coloca un nombre válido.";
   Isvalid = false;
 }
};

const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%.\+#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%\+.#?&\/\/=]*)/;

if (!urlPattern.test(userInput)) {
    URLerror.textContent = "URL Inválido.";
        Isvalid = false;
}


function limpiarFormulario() {
    document.getElementById("username").value= "";
    document.getElementById("profileImg").value="";
    document.getElementById("img").value="";
}

let alertMessage = document.getElementById("alertMessage").innerHTML

// Event listener para el botón de publicar
document.getElementById('submit-btn').addEventListener('click', function(event) {
    // Validar el formulario al hacer clic en el botón de publicar
    if (!validateForm()) {
      // Prevenir el envío del formulario si hay errores
      event.preventDefault();
    }
});
=======
// Función para obtener la fecha y hora actual
function getCurrentDateTime() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1); // Enero inicia en 0
  const dd = String(today.getDate());
  const hh = String(today.getHours());
  const min = String(today.getMinutes()) ;

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
    
>>>>>>> 4ebe86a08401f939d42f37559eb9ddf2a1054244
