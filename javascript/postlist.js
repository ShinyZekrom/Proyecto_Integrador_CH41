function addPost(post){
    // Convertir el timestamp a una fecha legible 
const date = new Date(post.timestamp);
const formattedDate = date.toLocaleString('es-MX', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true, // Usa formato de 12 horas
    timeZone: 'America/Mexico_City' // Zona horaria de Ciudad de México
});

const postHTML = `
    <div class="post">
        <div class="card">
            <div class="card-body">
                <div class="detalle-usuario">
                    <div class="perfil-imagen">
                        <img src="${post.profileImg}" alt="Imagen de perfil">
                    </div>
                    <h5 class="name-usuario">${post.username}</h5>
                    <p class="date-act"><small class="text-body-secondary">&bull;${formattedDate}</small></p>
                    </div>
                <p class="post-text">${post.description}</p>   
            </div>
            ${post.img ? `<img src="${post.img}" class="img-poster" alt="postimg">` : ''}
            <div class="interacciones">
                <button type="button" class="btn reaction" onclick="toggleReaction(this, 'like')" title="Me gusta">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
                    <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/>
                </svg>
                    <span class="reaction-count like-count">0</span>
                </button>
                <button type="button" class="btn reaction" onclick="toggleReaction(this, 'love')" title="Me encanta">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span class="reaction-count love-count">0</span>
                </button>
                <button type="button" class="btn reaction" onclick="toggleReaction(this, 'haha')" title="Me divierte">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12L13 9.94zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11l1.06-1.06zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
                    <span class="reaction-count haha-count">0</span>
                </button>
                <button type="button" class="btn reaction" onclick="toggleReaction(this, 'wow')" title="Me asombra">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><rect fill="none" height="24" width="24"/>
                    <path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2L12,2z M10,11V8c0-0.55-0.45-1-1-1h0C8.45,7,8,7.45,8,8v3c0,0.55,0.45,1,1,1h0C9.55,12,10,11.55,10,11z M16,11V8 c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h0C15.55,12,16,11.55,16,11z M14,16c0-1.1-0.9-2-2-2h0 c-1.1,0-2,0.9-2,2v2h4V16z"/>
                </svg>
                    <span class="reaction-count wow-count">0</span>
                </button>
                <button type="button" class="btn reaction" onclick="toggleReaction(this, 'sad')" title="Me entristece">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                   <path d="M0 0h24v24H0V0z" fill="none"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/>
                   <path d="M12 14c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5zm-.01-12C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                   <span class="reaction-count sad-count">0</span>
                </button>
            </div>
        </div>
    </div>
    <br>`;
return postHTML;
}

document.addEventListener("DOMContentLoaded", function() {
const publicationContainer = document.getElementById('publication-container');

// Recuperar los datos del LocalStorage
let posts = JSON.parse(localStorage.getItem('publicaciones')) || [];

if (posts.length > 0) {
  // Ordenar las publicaciones por fecha, las más recientes primero
  posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
  // Crear el contenido HTML para mostrar todas las publicaciones
  const publicationsHTML = posts.map(post => addPost(post)).join('');

  // Añadir el contenido HTML al contenedor
  publicationContainer.innerHTML = publicationsHTML;
} else {
  publicationContainer.innerHTML = '<p>No hay publicaciones nuevas.</p>';
}

// Agregar las publicaciones predefinidas si no hay publicaciones en el localStorage
if (posts.length === 0) {
    const ejemploPosts = [
        {
            'username': 'Carol',
            'profileImg': '/src/team/carol.jpg',
            'timestamp': '2024/05/10, 14:35:49',
            'description': 'Mi visita al parque fue hermosa',
            'img': 'https://hips.hearstapps.com/hmg-prod/images/hyde-park-royalty-free-image-1658405636.jpg?crop=1.00xw:0.753xh;0,0.176xh&resize=1200:*'
        },
        {
            'username': 'Luis',
            'profileImg': '/src/team/luis.jpg',
            'timestamp': '2024/05/10, 15:20:22',
            'description': 'Observen este maravilloso paisaje',
            'img': "https://www.well-played.com.au/wp-content/uploads/2020/11/beyond-light-1536x864.jpg"
        },
        {
            'username': 'Karen',
            'profileImg': '/src/team/karen.jpg',
            'timestamp': '2024/05/10, 16:45:15',
            'description': 'Un viaje inolvidable.',
            'img': 'https://millasxelmundo.com/wp-content/uploads/2024/01/Envejecemos-lento-1.jpg'
        },
        {
            'username': 'Claudia',
            'profileImg': '/src/team/sally.jpg',
            'timestamp': '2024/05/10, 17:52:25',
            'description': 'He terminado de leer un libro mientras iba en el avión, fue excelente.',
            'img': 'https://images.unsplash.com/photo-1499257398700-43669759a540?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            'username': 'Alan',
            'profileImg': '/src/team/alan.jpg',
            'timestamp': '2024/05/10, 18:00:00',
            'description': 'Un viaje en bicicleta para olvidarte de todo',
            'img': 'https://pedaleandoalma.com/wp-content/uploads/2019/11/Sur-America-en-Bicicleta-Carlos-E.-Carvajal.jpg'
        },
        {
            'username': 'Gabriel',
            'profileImg': '/src/team/gabriel.jpg',
            'timestamp': '2024/05/10, 18:45:42',
            'description': 'Hoy salimos en moto y las fotos quedaron excelentes!!',
            'img': 'https://www.bardahl.com.mx/wp-content/uploads/2017/03/Empazar-Viaje-Motocicleta.jpg'
        },
        {
            'username': 'Pedro',
            'profileImg': '/src/team/pedro.jpg',
            'timestamp': '2024/05/10, 19:10:50',
            'description': 'Hoy nos tocó explorar la montaña.',
            'img': 'https://images.ecestaticos.com/v13T_UwC3G-eLFA98kbsWovUcFQ=/0x139:2710x1667/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F251%2Fa33%2Ffa4%2F251a33fa465096ed19fe8ba0d7719a77.jpg'
        },
        {
            'username': 'Gibran',
            'profileImg': '/src/team/gibran.jpg',
            'timestamp': '2024/05/10, 19:50:12',
            'description': 'Un dia perfecto con los amigos a quienes estimo.',
            'img': 'https://blog.hoteleus.com/wp-content/uploads/2023/12/Viaje-con-amigos-a-Costa-Rica-scaled.jpg'
        },
        {
            'username': 'usuario9',
            'profileImg': 'https://m.media-amazon.com/images/I/712Z3RqOOJL._AC_UF894,1000_QL80_.jpg',
            'timestamp': '2024/05/10, 20:30:15',
            'description': 'Hola', //post sin descripción pero con imágen 
            'img': 'https://i.pinimg.com/originals/cf/32/28/cf32289918dc21d4b4f79ec1f9fac0fb.jpg'
        },
        {
            'username': 'usuario10',
            'profileImg': 'https://static.vecteezy.com/system/resources/previews/008/063/100/non_2x/rear-view-portrait-of-young-man-traveler-with-backpack-standing-on-a-mountain-with-arms-spread-open-travel-life-style-and-adventure-concept-free-photo.jpg',
            'timestamp': '2024/05/10, 21:15:05',
            'description': 'Post de prueba sin imagen.',
            'img': ''
        }
    
    ];
    //Para añadir los posts que se van generando en el formPublicacion
    ejemploPosts.forEach(post => {
        posts.push(post);
    });
    localStorage.setItem('publicaciones', JSON.stringify(posts));
    const publicationsHTML = posts.map(post => addPost(post)).join('');
    publicationContainer.innerHTML = publicationsHTML;
}
});

// Objeto para almacenar el estado de las reacciones
const reactionState = {
like: false,
love: false,
haha: false,
wow: false,
sad: false
};

function toggleReaction(element, reactionType) {
const post = element.closest('.post');
const countElement = post.querySelector(`.${reactionType}-count`);

// Toggle the state
const isActive = element.classList.toggle('active');

// Actualizar el estilo del botón
if (isActive) {
    element.querySelector('svg').style.fill = '#1877f2'; // Color azul cuando está activo
} else {
    element.querySelector('svg').style.fill = '#5f6368'; // Color gris original
}

// Actualizar el contador
if (countElement) {
    let count = parseInt(countElement.textContent);
    count += isActive ? 1 : -1;
    countElement.textContent = count;
}

}