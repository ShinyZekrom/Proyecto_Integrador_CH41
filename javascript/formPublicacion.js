<<<<<<< HEAD

function validateForm() {
    // Obtener valores de los campos del formulario
    const name = document.getElementById("name").value;
    const hora = document.getElementById("hora").value;
    const message = document.getElementById("message").value;
   

    // Obtener elementos de mensajes de error
    const nameError = document.getElementById("nameError");
    const horaError = document.getElementById("horaError");
    const messageError = document.getElementById("messageError");
   


    // Mensaje de enviado
    const alertMessage = document.getElementById("alertMessage");

    // Inicializar validación
    let Isvalid = true;

    // Resetear mensajes de error cuando esté correcto
    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Validar nombre
    const patronNombre = /^[a-zA-Z\s]+$/; // ^indica que debe iniciar con lo que tiene a continuación
    if (!patronNombre.test(name)) {
      nameError.textContent = "Coloca un nombre válido.";
      Isvalid = false;
    }

    // Validar teléfono (solo números)
    const numCel = /^[0-9]{10}$/; //{10} significa que solo pueden ser 10 números
    if (!numCel.test(phone)) {
      phoneError.textContent = "Ingresa tu número celular.";
      Isvalid = false;
    }

    // Validar correo electrónico
    const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!patronCorreo.test(email)) {
      emailError.textContent = "Ingresa un correo electrónico.";
      Isvalid = false;
    }

    // Validar mensaje
    if (message.trim() === "") {
      messageError.textContent = "Mensaje Inválido.";
      Isvalid = false;
    }

    // Retornar validación
    return Isvalid;
  }// función validateform

  function limpiarFormulario(){
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }// función limpiarformulario

  function enviarFormulario(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    if (validateForm()) {
      // Obtener los valores del formulario
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
};}// función enviarFormulario

  let alertMessage = document.getElementById("alertMessage").innerHTML

    document.getElementById("contactForm").addEventListener("submit", function(event) {
    validateForm(); // Validar formulario antes de enviar
    enviarFormulario(event); // Enviar formulario si es válido
  }); //evento submit botón 


  function validateForm(hora) {
    if (innerText) {
    
    }
    
    
    
    
}






=======
// Función para obtener la fecha y hora actual
function getCurrentDateTime() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = String(today.getMonth() + 1); // Enero inicia en 0
  var dd = String(today.getDate());
  var hh = String(today.getHours());
  var min = String(today.getMinutes()) ;

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
    
      const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;
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
    
>>>>>>> 920641b42fab1d692f33e76784a691c9bb064cfb
