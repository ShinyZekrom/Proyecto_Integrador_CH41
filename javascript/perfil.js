function generateProfile(user) {
    const perfilHTML = `<div class="container d-flex flex-column align-items-center">
  <div class="main-body">
    <div class="row gutters justify-content-center">
      <div class="col-md-7 mb-7">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img src="${user.profileImg}" alt="User" class="rounded" width="250">
              <div class="mt-3">
                <h4>${user.name}</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-0">
          <div class="card-body">
            <h4>Descripción</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius illo quasi magni dolore quam doloribus suscipit enim ipsum cupiditate vitae blanditiis maxime eveniet, nostrum vel, veritatis atque aliquid! Quia.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row gutters-sm justify-content-center">
      <div class="col-md-8 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Nombre</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                ${user.name}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Usuario</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                ${user.username}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Correo</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                ${user.email}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Teléfono</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                ${user.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
    return perfilHTML;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const perfilContainer = document.getElementById('profile-container');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  
    if (loggedInUser && users.length > 0) {
      const userProfile = users.find(user => user.username === loggedInUser.username);
      if (userProfile) {
        const perfilHTML = generateProfile(userProfile);
        perfilContainer.innerHTML = perfilHTML;
      } else {
        perfilContainer.innerHTML = '<p>No se encontró el perfil del usuario.</p>';
      }
    } else {
      perfilContainer.innerHTML = '<p>No hay usuario logueado o no hay usuarios registrados.</p>';
    }
  });