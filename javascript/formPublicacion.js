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