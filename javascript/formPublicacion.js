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
  



  
  // Event listener para el botón de publicar
  document.getElementById('submit-btn').addEventListener('click', function(event) {
    // Validar el formulario al hacer clic en el botón de publicar
    if (!validateForm()) {
      // Prevenir el envío del formulario si hay errores
      event.preventDefault();
    }
  });