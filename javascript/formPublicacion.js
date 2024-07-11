document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('post-form');
  const submitBtn = document.getElementById('submit-btn');
  const alertValidaciones = document.getElementById('alertValidaciones');
  const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');
  const alertSuccess = document.getElementById('alertSuccess');

  // Recuperar información del usuario que ha iniciado sesión
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // Verificar si el usuario ha iniciado sesión
  if (!loggedInUser || !loggedInUser.id) {
    // Redirigir al login si no hay usuario logueado o falta el ID
    window.location.href = 'login.html';
    return;
  }

  // Mostrar el email del usuario si está disponible
  if (loggedInUser.email) {
    document.getElementById('username').textContent = loggedInUser.username;
  }

  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    let errors = [];
    
    const description = document.getElementById('description').value;
    const contenido = document.getElementById('img').value;

    // Validaciones
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
        usuarioId: loggedInUser.id,
        descripcion: description,
        contenido: contenido
      };
      
      // Enviar la publicación al backend
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      // Añadir el token de acceso al header
      myHeaders.append("Authorization", "Bearer " + loggedInUser.accessToken);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(nuevaPublicacion),
        redirect: "follow"
      };

      fetch("http://localhost:8080/api/publicaciones/", requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(result => {
          console.log("Publicación creada:", result);
          
          // Mostrar mensaje de éxito
          alertSuccess.style.display = 'block';
          alertValidaciones.style.display = 'none';

          // Redirigir a la página de publicaciones después de un breve delay
          setTimeout(() => {
            window.location.href = 'paginaPrincipal.html';
          }, 2000);
        })
        .catch(error => {
          console.error('Error:', error);
          alertValidaciones.style.display = 'block';
          alertValidacionesTexto.innerHTML = 'Error al crear la publicación. Por favor, intenta de nuevo.';
          alertSuccess.style.display = 'none';
        });
    }
  });
});