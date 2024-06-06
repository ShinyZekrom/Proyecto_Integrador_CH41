
    function cargarNavbar(){
        let navbarHTML =` <nav class="navbar navbar-expand-lg navbar-light">
           <div class="container-fluid">
             <a class="navbar-brand" href="/index.html">DELHAZ</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="/paginaPrincipal.html">Inicio</a></li>
          <li class="nav-item"><a class="nav-link" href="/formularioPublicacion.html">Publica aquí</a></li>
          <li class="nav-item"><a class="nav-link" href="/contactUs.html">Contactanos</a></li>
          <li class="nav-item"><a class="nav-link" href="/acercaDeNosotros.html">Acerca de Nosotros</a></li>
        </ul>
        <form class="d-flex" role="search">
          <input id="navsearcher" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img class="fotoperfil" src="./src/imagenperfil.webp" alt="Foto de perfil">
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Registrate</a></li>
            <li><a class="dropdown-item" href="#">Iniciar Sesión</a></li>
            <li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>`;
        document.getElementById("navbarAqui").innerHTML = navbarHTML;
    } // función cargar navbar

    document.addEventListener("DOMContentLoaded", cargarNavbar);
    //cargará el navbar
