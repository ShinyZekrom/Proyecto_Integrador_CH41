
    function cargarNavbar(){
        let navbarHTML =`   <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"><img src="/src/logooficial.svg" alt="" class="logoOficial"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="/paginaPrincipal.html">Inicio</a></li>
          <li class="nav-item"><a class="nav-link" href="/contactUs.html">Contáctanos</a></li>
          <li class="nav-item"><a class="nav-link" href="/acercaDeNosotros.html">Acerca de Nosotros</a></li>
        </ul>
        <div class="dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img id="navbarProfilePic" class="fotoperfil" src="./src/imagenperfil.webp" alt="Foto de perfil">
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="/login.html">Iniciar Sesión</a></li>
            <li><a class="dropdown-item" href="/registrate.html">Regístrate</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>`;
        document.getElementById("navbarAqui").innerHTML = navbarHTML;
    } // función cargar navbar

document.addEventListener("DOMContentLoaded", cargarNavbar);
//cargará el navbar

document.addEventListener('DOMContentLoaded', function() {
  const navbarProfilePic = document.getElementById('navbarProfilePic');

  // Cargar la información del usuario al cargar la página
  cargarInfoUsuario();

  function cargarInfoUsuario() {
    const usuarioLogueado = JSON.parse(localStorage.getItem('loggedInUser'));
    if (usuarioLogueado && usuarioLogueado.profileImg) {
      navbarProfilePic.src = usuarioLogueado.profileImg;
    }
  }
});