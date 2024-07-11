// Función para obtener las publicaciones del servidor
function getPublicaciones() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    return fetch("http://localhost:8080/api/publicaciones/", requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Datos recibidos del servidor:', data);
        if (Array.isArray(data)) {
          data.forEach((post, index) => {
            console.log(`Post ${index}:`, post);
            console.log(`Usuario del post ${index}:`, post.usuario);
          });
        }
        return data;
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  }
  
  // Función modificada para agregar una publicación
  function addPost(post) {
    console.log('Fecha recibida:', post.fechaPublicacion);
    
    let date;
    if (post.fechaPublicacion && Array.isArray(post.fechaPublicacion)) {
        // Extraer los componentes de la fecha del array
        const [year, month, day, hour, minute, second, millisecond] = post.fechaPublicacion;
        
        // Crear un objeto Date
        // Nota: los meses en JavaScript son 0-indexados, por lo que restamos 1 del mes
        date = new Date(year, month - 1, day, hour, minute, second, millisecond / 1000000);
    } else {
        console.error('Formato de fecha inesperado:', post.fechaPublicacion);
        date = new Date();
    }
    
    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
        console.error('Fecha inválida:', post.fechaPublicacion);
        // Usar la fecha actual si la fecha proporcionada no es válida
        date = new Date();
    }
    
    // Formatear la fecha para mostrarla
    const formattedDate = date.toLocaleString('es-MX', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true,
        timeZone: 'America/Mexico_City'
    });
      
     // Usar los campos directamente del objeto post
    const username = post.username || 'Usuario desconocido';
    const fotoPerfil = post.fotoPerfil || '/ruta/a/imagen/por/defecto.jpg';
    const descripcion = post.descripcion || 'Sin descripción';
    const contenido = post.contenido || '';

       // Asegurarse de que formattedDate tenga un valor
       const dateDisplay = formattedDate || 'Fecha no disponible';

       const postHTML = `
       <div class="post">
           <div class="card">
               <div class="card-body">
                   <div class="detalle-usuario">
                       <div class="perfil-imagen">
                           <img src="${fotoPerfil}" alt="Imagen de perfil">
                       </div>
                       <h5 class="name-usuario">${username}</h5>
                       <p class="date-act"><small class="text-body-secondary">${dateDisplay}</small></p>
                   </div>
                   <p class="post-text">${descripcion}</p>   
               </div>
               ${contenido ? `<img src="${contenido}" class="img-poster" alt="postimg">` : ''}
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


// Modificar el evento DOMContentLoaded para usar la nueva función getPublicaciones
document.addEventListener("DOMContentLoaded", function() {
    const publicationContainer = document.getElementById('publication-container');

    getPublicaciones()
        .then(posts => {
            if (posts.length > 0) {
                // Ordenar las publicaciones por fecha, las más recientes primero
                posts.sort((a, b) => {
                    const dateA = Array.isArray(a.fechaPublicacion) ? new Date(...a.fechaPublicacion) : new Date(a.fechaPublicacion);
                    const dateB = Array.isArray(b.fechaPublicacion) ? new Date(...b.fechaPublicacion) : new Date(b.fechaPublicacion);
                    return dateB - dateA;
                });
                
                // Crear el contenido HTML para mostrar todas las publicaciones
                const publicationsHTML = posts.map(post => addPost(post)).join('');

                // Añadir el contenido HTML al contenedor
                publicationContainer.innerHTML = publicationsHTML;
            } else {
                publicationContainer.innerHTML = '<p>No hay publicaciones nuevas.</p>';
            }
        })
        .catch(error => {
            console.error('Error al obtener las publicaciones:', error);
            publicationContainer.innerHTML = '<p>Error al cargar las publicaciones.</p>';
        });
});

// Objeto para almacenar el estado de las reacciones
const reactionState = {
like: false,
love: false,
haha: false,
wow: false,
sad: false
};

// Variable global para almacenar la reacción activa actual
let activeReaction = null;

function toggleReaction(element, reactionType) {
const post = element.closest('.post');
const allReactions = post.querySelectorAll('.reaction');

// Si ya hay una reacción activa y no es la misma que se está clickeando
if (activeReaction && activeReaction !== element) {
    // Desactivar la reacción anterior
    const prevReactionType = activeReaction.onclick.toString().match(/toggleReaction\(this, '(\w+)'/)[1];
    const prevCountElement = activeReaction.querySelector(`.${prevReactionType}-count`);
    activeReaction.classList.remove('active');
    activeReaction.querySelector('svg').style.fill = '#5f6368';
    if (prevCountElement) {
        let prevCount = parseInt(prevCountElement.textContent);
        prevCountElement.textContent = Math.max(0, prevCount - 1);
    }
}

// Toggle la nueva reacción
const isActive = element.classList.toggle('active');
const countElement = element.querySelector(`.${reactionType}-count`);

if (isActive) {
    element.querySelector('svg').style.fill = '#1877f2';
    activeReaction = element;
    if (countElement) {
        let count = parseInt(countElement.textContent);
        countElement.textContent = count + 1;
    }
} else {
    element.querySelector('svg').style.fill = '#5f6368';
    activeReaction = null;
    if (countElement) {
        let count = parseInt(countElement.textContent);
        countElement.textContent = Math.max(0, count - 1);
    }
}
}