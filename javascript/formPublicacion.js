document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('post-form');
  const submitBtn = document.getElementById('submit-btn');
  const alertValidaciones = document.getElementById('alertValidaciones');
  const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');
  const alertSuccess = document.getElementById('alertSuccess');

  // Recuperar información del usuario que ha iniciado sesión
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // Mostrar el nombre de usuario
  if (loggedInUser && loggedInUser.username) {
    document.getElementById('username').textContent = loggedInUser.username;
  }

  // Pre-llenar campos si existe información del usuario
  if (loggedInUser) {
    document.getElementById('username').value = loggedInUser.username;
    document.getElementById('username').readOnly = true;
  }

  //Regex para url de imagen
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

  submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
    let errors = [];
    
    const description = document.getElementById('description').value;
    const img = document.getElementById('img').value;

    // Validaciones de la descripción
    if (!description) {
      errors.push('* La descripción es obligatoria');
      document.getElementById('description').classList.add('is-invalid');
    } else {
      document.getElementById('description').classList.remove('is-invalid');
    }

    if (errors.length > 0) {
      alertValidaciones.style.display = 'block';
      alertValidacionesTexto.innerHTML = errors.join('<br>');
      alertSuccess.style.display = 'none';
    } else {
      // Crear objeto con la información de la publicación
      const nuevaPublicacion = {
        id: Date.now(), // Genera un ID único basado en la marca de tiempo
        username: loggedInUser.username,
        profileImg: loggedInUser.profileImg,
        timestamp: new Date().toISOString(),
        description: description,
        img: img
      };
      
      // Recuperar publicaciones existentes o inicializar un array vacío
      let publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
      
      // Añadir la nueva publicación
      publicaciones.push(nuevaPublicacion);
      
      // Guardar el array actualizado en localStorage
      localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
      
      console.log("Nueva publicación añadida:", nuevaPublicacion);
      console.log("Total de publicaciones:", publicaciones.length);

      // Mostrar mensaje de éxito
      alertSuccess.style.display = 'block';
      alertValidaciones.style.display = 'none';

      // Redirigir a la página de publicaciones después de un breve delay
      setTimeout(() => {
        window.location.href = 'paginaPrincipal.html';
      }, 2000); // Espera 2 segundos antes de redirigir
    }
  });
});