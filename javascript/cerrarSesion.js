document.addEventListener('DOMContentLoaded', function() {
  const cerrarSesionBtn = document.getElementById('cerrarSesion');
  const navbarProfilePic = document.getElementById('navbarProfilePic');

  // Cargar la información del usuario al cargar la página
  cargarInfoUsuario();

  cerrarSesionBtn.addEventListener('click', function(e) {
    e.preventDefault();
    cerrarSesion();
  });

  function cargarInfoUsuario() {
    const usuarioLogueado = JSON.parse(localStorage.getItem('loggedInUser'));
    if (usuarioLogueado && usuarioLogueado.profileImg) {
      navbarProfilePic.src = usuarioLogueado.profileImg;
    }
  }

  function cerrarSesion() {
    // Eliminar la información del usuario logueado
    localStorage.removeItem('loggedInUser');

    // Restablecer la imagen de perfil por defecto
    navbarProfilePic.src = './src/imagenperfil.webp';

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = 'login.html'; // Asegúrate de que esta sea la ruta correcta
  }
});