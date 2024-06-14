
function validateForm() {
 
 // Valores de los campos del formulario
const formulario = document.getElementById("form")
const name = document.getElementById("name").value; 
const img= document.getElementById("img").value; 
const hora = document.getElementById("hora").value; 
const message = document.getElementById("message").value; 
const image = document.getElementById("input-img").value; 
const btnPublicar = document.getElementById("btnPublicar"); 

 // Inicializar validación
 let Isvalid = true;

  // Resetear mensajes de error cuando esté correcto
  nameError.textContent = "";
  perfilError.textContent = "";
  horaError.textContent = "";
  messageError.textContent = "";
  imgError.textContent = "";

 // Validar nombre
 const patronNombre = /^[a-zA-Z\s]+$/; 
 if (!patronNombre.test(name)) {
   nameError.textContent = "Coloca un nombre válido.";
   Isvalid = false;
 }

 const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;

if (!urlPattern.test(userInput)) {
    urlError.textContent = "URL Inválido.";
        Isvalid = false;
}

    // Validar mensaje
    if (message.trim() === "") {
        messageError.textContent = "Mensaje Inválido.";
        Isvalid = false;
      }

      // Retornar validación
      return Isvalid;
}


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



btnPublicar.addEventListener("click", function(event){
    event.preventDefault();
});