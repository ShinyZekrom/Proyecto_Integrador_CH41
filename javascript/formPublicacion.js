
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