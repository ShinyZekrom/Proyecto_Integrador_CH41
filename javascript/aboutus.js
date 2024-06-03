//-------------------------------MODAL ACERCA DE NOSOTROS ----------------------------------

//-----------------------------------------MODAL LUIS --------------------------------------
function abrirVentanadev1() {
    const ventanadev1 = document.getElementById("desarrollador1");
    ventanadev1.classList.add("ventanadev1_mostrar");
}

//Función para cerrar ventana flotante (modal)
function cerrarVentanadev1() {
    const ventanadev1 = document.getElementById("desarrollador1");
    ventanadev1.classList.remove("ventanadev1_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor 
function fueraVentanadev1(evento) {
    const ventanadev1 = document.getElementById("desarrollador1");
    if (evento.target == ventanadev1) {
        ventanadev1.classList.remove("ventanadev1_mostrar");
    }
}

// Agregar los event listeners 
function iniciarVentanadev1() {
    const abrirVentanadev1boton = document.getElementById("abrirVentanadev1");
    const cerrarVentanadev1boton = document.querySelector(".cerrardev1");

    abrirVentanadev1boton.addEventListener("click", abrirVentanadev1);
    cerrarVentanadev1boton.addEventListener("click", cerrarVentanadev1);
    window.addEventListener("click", fueraVentanadev1);
}

//Inicializar los event listeners 
window.addEventListener("DOMContentLoaded", iniciarVentanadev1);


//-----------------------------------------MODAL CLAUDIA --------------------------------------
function abrirVentanadev2() {
    const ventanadev2 = document.getElementById("desarrollador2");
    ventanadev2.classList.add("ventanadev2_mostrar");
}

//Función para cerrar ventana flotante (modal)
function cerrarVentanadev2() {
    const ventanadev2 = document.getElementById("desarrollador2");
    ventanadev2.classList.remove("ventanadev2_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor 
function fueraVentanadev2(evento) {
    const ventanadev2 = document.getElementById("desarrollador2");
    if (evento.target == ventanadev2) {
        ventanadev2.classList.remove("ventanadev2_mostrar");
    }
}

// Agregar los event listeners 
function iniciarVentanadev2() {
    const abrirVentanadev2boton = document.getElementById("abrirVentanadev2");
    const cerrarVentanadev2boton = document.querySelector(".cerrardev2");

    abrirVentanadev2boton.addEventListener("click", abrirVentanadev2);
    cerrarVentanadev2boton.addEventListener("click", cerrarVentanadev2);
    window.addEventListener("click", fueraVentanadev2);
}

//Inicializar los event listeners 
window.addEventListener("DOMContentLoaded", iniciarVentanadev2);


//-----------------------------------------MODAL CAROL --------------------------------------
function abrirVentanadev3() {
    const ventanadev3 = document.getElementById("desarrollador3");
    ventanadev3.classList.add("ventanadev3_mostrar");
}

//Función para cerrar ventana flotante (modal)
function cerrarVentanadev3() {
    const ventanadev3 = document.getElementById("desarrollador3");
    ventanadev3.classList.remove("ventanadev3_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor 
function fueraVentanadev3(evento) {
    const ventanadev3 = document.getElementById("desarrollador3");
    if (evento.target == ventanadev3) {
        ventanadev3.classList.remove("ventanadev3_mostrar");
    }
}

// Agregar los event listeners 
function iniciarVentanadev3() {
    const abrirVentanadev3boton = document.getElementById("abrirVentanadev3");
    const cerrarVentanadev3boton = document.querySelector(".cerrardev3");

    abrirVentanadev3boton.addEventListener("click", abrirVentanadev3);
    cerrarVentanadev3boton.addEventListener("click", cerrarVentanadev3);
    window.addEventListener("click", fueraVentanadev3);
}

//Inicializar los event listeners 
window.addEventListener("DOMContentLoaded", iniciarVentanadev3);


//-----------------------------------------MODAL KAREN --------------------------------------
function abrirVentanadev4() {
    const ventanadev4 = document.getElementById("desarrollador4");
    ventanadev4.classList.add("ventanadev4_mostrar");
}

//Función para cerrar ventana flotante (modal)
function cerrarVentanadev4() {
    const ventanadev4 = document.getElementById("desarrollador4");
    ventanadev4.classList.remove("ventanadev4_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor 
function fueraVentanadev4(evento) {
    const ventanadev4 = document.getElementById("desarrollador4");
    if (evento.target == ventanadev4) {
        ventanadev4.classList.remove("ventanadev4_mostrar");
    }
}

// Agregar los event listeners 
function iniciarVentanadev4() {
    const abrirVentanadev4boton = document.getElementById("abrirVentanadev4");
    const cerrarVentanadev4boton = document.querySelector(".cerrardev4");

    abrirVentanadev4boton.addEventListener("click", abrirVentanadev4);
    cerrarVentanadev4boton.addEventListener("click", cerrarVentanadev4);
    window.addEventListener("click", fueraVentanadev4);
}

//Inicializar los event listeners 
window.addEventListener("DOMContentLoaded", iniciarVentanadev4);


//-----------------------------------------MODAL GABRIEL --------------------------------------
function abrirVentanadev5() {
    const ventanadev5 = document.getElementById("desarrollador5");
    ventanadev5.classList.add("ventanadev5_mostrar");
}

//Función para cerrar ventana flotante (modal)
function cerrarVentanadev5() {
    const ventanadev5 = document.getElementById("desarrollador5");
    ventanadev5.classList.remove("ventanadev5_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor 
function fueraVentanadev5(evento) {
    const ventanadev5 = document.getElementById("desarrollador5");
    if (evento.target == ventanadev5) {
        ventanadev5.classList.remove("ventanadev5_mostrar");
    }
}

// Agregar los event listeners 
function iniciarVentanadev5() {
    const abrirVentanadev5boton = document.getElementById("abrirVentanadev5");
    const cerrarVentanadev5boton = document.querySelector(".cerrardev5");

    abrirVentanadev5boton.addEventListener("click", abrirVentanadev5);
    cerrarVentanadev5boton.addEventListener("click", cerrarVentanadev5);
    window.addEventListener("click", fueraVentanadev5);
}

//Inicializar los event listeners 
window.addEventListener("DOMContentLoaded", iniciarVentanadev5);


//-----------------------------------------MODAL ALAN --------------------------------------
function abrirVentanadev6() {
    const ventanadev6 = document.getElementById("desarrollador6");
    ventanadev6.classList.add("ventanadev6_mostrar");
}

//Función para cerrar ventana flotante (modal)
function cerrarVentanadev6() {
    const ventanadev6 = document.getElementById("desarrollador6");
    ventanadev6.classList.remove("ventanadev6_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor 
function fueraVentanadev6(evento) {
    const ventanadev6 = document.getElementById("desarrollador6");
    if (evento.target == ventanadev6) {
        ventanadev6.classList.remove("ventanadev6_mostrar");
    }
}

// Agregar los event listeners 
function iniciarVentanadev6() {
    const abrirVentanadev6boton = document.getElementById("abrirVentanadev6");
    const cerrarVentanadev6boton = document.querySelector(".cerrardev6");

    abrirVentanadev6boton.addEventListener("click", abrirVentanadev6);
    cerrarVentanadev6boton.addEventListener("click", cerrarVentanadev6);
    window.addEventListener("click", fueraVentanadev6);
}

//Inicializar los event listeners 
window.addEventListener("DOMContentLoaded", iniciarVentanadev6);


//-----------------------------------------MODAL PEDRO --------------------------------------
function abrirVentanadev7() {
    const ventanadev7 = document.getElementById("desarrollador7");
    ventanadev7.classList.add("ventanadev7_mostrar");
}

//Función para cerrar ventana flotante (modal)
function cerrarVentanadev7() {
    const ventanadev7 = document.getElementById("desarrollador7");
    ventanadev7.classList.remove("ventanadev7_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor 
function fueraVentanadev7(evento) {
    const ventanadev7 = document.getElementById("desarrollador7");
    if (evento.target == ventanadev7) {
        ventanadev7.classList.remove("ventanadev7_mostrar");
    }
}

// Agregar los event listeners 
function iniciarVentanadev7() {
    const abrirVentanadev7boton = document.getElementById("abrirVentanadev7");
    const cerrarVentanadev7boton = document.querySelector(".cerrardev7");

    abrirVentanadev7boton.addEventListener("click", abrirVentanadev7);
    cerrarVentanadev7boton.addEventListener("click", cerrarVentanadev7);
    window.addEventListener("click", fueraVentanadev7);
}

//Inicializar los event listeners 
window.addEventListener("DOMContentLoaded", iniciarVentanadev7);


//-----------------------------------------MODAL GIBRAN --------------------------------------
function abrirVentanadev8() {
    const ventanadev8 = document.getElementById("desarrollador8");
    ventanadev8.classList.add("ventanadev8_mostrar");
}

//Función para cerrar ventana flotante (modal)
function cerrarVentanadev8() {
    const ventanadev8 = document.getElementById("desarrollador8");
    ventanadev8.classList.remove("ventanadev8_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor 
function fueraVentanadev8(evento) {
    const ventanadev8 = document.getElementById("desarrollador8");
    if (evento.target == ventanadev8) {
        ventanadev8.classList.remove("ventanadev8_mostrar");
    }
}

// Agregar los event listeners 
function iniciarVentanadev8() {
    const abrirVentanadev8boton = document.getElementById("abrirVentanadev8");
    const cerrarVentanadev8boton = document.querySelector(".cerrardev8");

    abrirVentanadev8boton.addEventListener("click", abrirVentanadev8);
    cerrarVentanadev8boton.addEventListener("click", cerrarVentanadev8);
    window.addEventListener("click", fueraVentanadev8);
}

//Inicializar los event listeners 
window.addEventListener("DOMContentLoaded", iniciarVentanadev8);
