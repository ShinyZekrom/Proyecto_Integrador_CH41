function addPost(post){
    const postHTML = `
        <div class="post">
            <div class="card">
                <div class="card-body">
                    <div class="detalle-usuario">
                        <div class="perfil-imagen">
                            <img src="${post.profileImg}" alt="Imagen de perfil">
                        </div>
                        <h5 class="name-usuario">${post.username}</h5>
                    </div>
                    <p class="post-text">${post.description}</p>
                    <p class="date-act"><small class="text-body-secondary">${post.timestamp}</small></p>
                </div>
                ${post.img ? `<img src="${post.img}" class="img-poster" alt="postimg">` : ''}
                <div class="interacciones">
                    <button type="btn-like" class="btn like"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>Me gusta</button>
                    <button type="btn-commet" class="btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
                    </svg>Comentar</button>
                </div>
            </div>
        </div>
    <br>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += postHTML;
}

// Lista de 10 publicaciones
const posts = [
    {
        'username': 'Carol',
        'profileImg': '/src/team/carol.jpg',
        'timestamp': '2024-06-10 14:35',
        'description': 'Mi visita al parque fue hermosa',
        'img': 'https://hips.hearstapps.com/hmg-prod/images/hyde-park-royalty-free-image-1658405636.jpg?crop=1.00xw:0.753xh;0,0.176xh&resize=1200:*'
    },
    {
        'username': 'Luis',
        'profileImg': '/src/team/luis.jpg',
        'timestamp': '2024-06-10 15:20',
        'description': 'Observen este maravilloso paisaje',
        'img': "https://www.well-played.com.au/wp-content/uploads/2020/11/beyond-light-1536x864.jpg"
    },
    {
        'username': 'Karen',
        'profileImg': '/src/team/karen.jpg',
        'timestamp': '2024-06-10 16:45',
        'description': 'Un viaje inolvidable.',
        'img': 'https://millasxelmundo.com/wp-content/uploads/2024/01/Envejecemos-lento-1.jpg'
    },
    {
        'username': 'Claudia',
        'profileImg': '/src/team/sally.jpg',
        'timestamp': '2024-06-10 17:30',
        'description': 'He terminado de leer un libro mientras iba en el avión, fue excelente.',
        'img': 'https://images.unsplash.com/photo-1499257398700-43669759a540?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        'username': 'Alan',
        'profileImg': '/src/team/alan.jpg',
        'timestamp': '2024-06-10 18:00',
        'description': 'Un viaje en bicicleta para olvidarte de todo',
        'img': 'https://pedaleandoalma.com/wp-content/uploads/2019/11/Sur-America-en-Bicicleta-Carlos-E.-Carvajal.jpg'
    },
    {
        'username': 'Gabriel',
        'profileImg': '/src/team/gabriel.jpg',
        'timestamp': '2024-06-10 18:45',
        'description': 'Hoy salimos en moto y las fotos quedaron excelentes!!',
        'img': 'https://www.bardahl.com.mx/wp-content/uploads/2017/03/Empazar-Viaje-Motocicleta.jpg'
    },
    {
        'username': 'Pedro',
        'profileImg': '/src/team/pedro.jpg',
        'timestamp': '2024-06-10 19:10',
        'description': 'Hoy nos tocó explorar la montaña.',
        'img': 'https://images.ecestaticos.com/v13T_UwC3G-eLFA98kbsWovUcFQ=/0x139:2710x1667/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F251%2Fa33%2Ffa4%2F251a33fa465096ed19fe8ba0d7719a77.jpg'
    },
    {
        'username': 'Gibran',
        'profileImg': '/src/team/gibran.jpg',
        'timestamp': '2024-06-10 19:50',
        'description': 'Un dia perfecto con los amigos a quienes estimo.',
        'img': 'https://blog.hoteleus.com/wp-content/uploads/2023/12/Viaje-con-amigos-a-Costa-Rica-scaled.jpg'
    },
    {
        'username': 'usuario9',
        'profileImg': 'https://m.media-amazon.com/images/I/712Z3RqOOJL._AC_UF894,1000_QL80_.jpg',
        'timestamp': '2024-06-10 20:30',
        'description': 'Hola', //post sin descripción pero con imágen 
        'img': 'https://i.pinimg.com/originals/cf/32/28/cf32289918dc21d4b4f79ec1f9fac0fb.jpg'
    },
    {
        'username': 'usuario10',
        'profileImg': 'https://static.vecteezy.com/system/resources/previews/008/063/100/non_2x/rear-view-portrait-of-young-man-traveler-with-backpack-standing-on-a-mountain-with-arms-spread-open-travel-life-style-and-adventure-concept-free-photo.jpg',
        'timestamp': '2024-06-10 21:15',
        'description': 'Post de prueba sin imagen.',
        'img': ''
    }
];

// Agregar los 10 objetos a la lista
posts.forEach(post => addPost(post));


document.addEventListener("DOMContentLoaded", function() {
    const publicationContainer = document.getElementById('publication-container');
  
    // Recuperar los datos del LocalStorage
    const formData = localStorage.getItem('formData');
    
    if (formData) {
      const parsedData = JSON.parse(formData);
      
      // Crear el contenido HTML para mostrar la publicación
      const publicationHTML =  `
      <div class="post">
          <div class="card">
              <div class="card-body">
                  <div class="detalle-usuario">
                      <div class="perfil-imagen">
                          <img src="${parsedData.profileImg}" alt="Imagen de perfil">
                      </div>
                      <h5 class="name-usuario">${parsedData.username}</h5>
                  </div>
                  <p class="post-text">${parsedData.description}</p>
                  <p class="date-act"><small class="text-body-secondary">${parsedData.timestamp}</small></p>
              </div>
              ${parsedData.img ? `<img src="${parsedData.img}" class="img-poster" alt="postimg">` : ''}
              <div class="interacciones">
                  <button type="btn-like" class="btn like"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>Me gusta</button>
                  <button type="btn-commet" class="btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
                  </svg>Comentar</button>
              </div>
          </div>
      </div>
      <br>`;
      
      // Añadir el contenido HTML al contenedor
      publicationContainer.innerHTML = publicationHTML;
    } else {
      publicationContainer.innerHTML = '<p>No hay publicaciones para mostrar.</p>';
    }
  });