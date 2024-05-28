//-------------------------------MODAL ACERCA DE NOSOTROS ----------------------------------

//-----------------------------------------MODAL LUIS --------------------------------------
function abrirVentanadev1 (){
    const ventanadev1 = document.getElementById("desarrollador1");
    ventanadev1.classList.add("ventanadev1_mostrar");
}

//Función para cerrar ventana flotante (modal) LUIS
function cerrarVentanadev1(){
    const ventanadev1 = document.getElementById("desarrollador1");
    ventanadev1.classList.remove("ventanadev1_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor LUIS
function fueraVentanadev1(evento){
    const ventanadev1 = document.getElementById("desarrollador1");
    if (evento.target == ventanadev1){
        ventanadev1.classList.remove("ventanadev1_mostrar");
    }
}

// Agregar los event listerners LUIS
function iniciarVentanadev1(){
    const abrirVentanadesarrollador1 = document.getElementById("abrirVentanadesarrollador1");
    const cerrarVentanadesarrollador1 = document.querySelector(".cerrardiv1");

    abrirVentanadesarrollador1.addEventListener("click", abrirVentanadev1);
    cerrarVentanadesarrollador1.addEventListener("click", cerrarVentanadev1);
    window.addEventListener("click", fueraVentanadev1);
}

//Inicializar los event listeners LUIS
window.addEventListener("DOMContentLoaded", iniciarVentanadev1);

//-----------------------------------------MODAL CLAUDIA -----------------------------------------
function abrirVentanadev2 (){
    const ventanadev2 = document.getElementById("desarrollador2");
    ventanadev2.classList.add("ventanadev2_mostrar");
}

//Función para cerrar ventana flotante (modal) CLAUDIA
function cerrarVentanadev2(){
    const ventanadev2 = document.getElementById("desarrollador2");
    ventanadev2.classList.remove("ventanadev2_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor CLAUDIA
function fueraVentanadev2(evento){
    const ventanadev2 = document.getElementById("desarrollador2");
    if (evento.target == ventanadev2){
        ventanadev2.classList.remove("ventanadev2_mostrar");
    }
}

// Agregar los event listerners CLAUDIA
function iniciarVentanadev2(){
    const abrirVentanadesarrollador2 = document.getElementById("abrirVentanadesarrollador2");
    const cerrarVentanadesarrollador2 = document.querySelector(".cerrardiv2");

    abrirVentanadesarrollador2.addEventListener("click", abrirVentanadev2);
    cerrarVentanadesarrollador2.addEventListener("click", cerrarVentanadev2);
    window.addEventListener("click", fueraVentanadev2);
}

//Inicializar los event listeners CLAUDIA
window.addEventListener("DOMContentLoaded", iniciarVentanadev2);

//-----------------------------------------MODAL CAROL ----------------------------------------
function abrirVentanadev3 (){
    const ventanadev3 = document.getElementById("desarrollador3");
    ventanadev3.classList.add("ventanadev3_mostrar");
}

//Función para cerrar ventana flotante (modal) CAROL
function cerrarVentanadev3(){
    const ventanadev3 = document.getElementById("desarrollador3");
    ventanadev3.classList.remove("ventanadev3_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor CAROL
function fueraVentanadev3(evento){
    const ventanadev3 = document.getElementById("desarrollador3");
    if (evento.target == ventanadev3){
        ventanadev3.classList.remove("ventanadev3_mostrar");
    }
}

// Agregar los event listerners CAROL
function iniciarVentanadev3(){
    const abrirVentanadesarrollador3 = document.getElementById("abrirVentanadesarrollador3");
    const cerrarVentanadesarrollador3 = document.querySelector(".cerrardiv3");

    abrirVentanadesarrollador3.addEventListener("click", abrirVentanadev3);
    cerrarVentanadesarrollador3.addEventListener("click", cerrarVentanadev3);
    window.addEventListener("click", fueraVentanadev3);
}

//Inicializar los event listeners CAROL
window.addEventListener("DOMContentLoaded", iniciarVentanadev3);

//-----------------------------------------MODAL KAREN ----------------------------------------
function abrirVentanadev4 (){
    const ventanadev4 = document.getElementById("desarrollador4");
    ventanadev4.classList.add("ventanadev4_mostrar");
}

//Función para cerrar ventana flotante (modal) KAREN
function cerrarVentanadev4(){
    const ventanadev4 = document.getElementById("desarrollador4");
    ventanadev4.classList.remove("ventanadev4_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor KAREN
function fueraVentanadev4(evento){
    const ventanadev4 = document.getElementById("desarrollador4");
    if (evento.target == ventanadev4){
        ventanadev4.classList.remove("ventanadev4_mostrar");
    }
}

// Agregar los event listerners KAREN
function iniciarVentanadev4(){
    const abrirVentanadesarrollador4 = document.getElementById("abrirVentanadesarrollador4");
    const cerrarVentanadesarrollador4 = document.querySelector(".cerrardiv4");

    abrirVentanadesarrollador4.addEventListener("click", abrirVentanadev4);
    cerrarVentanadesarrollador4.addEventListener("click", cerrarVentanadev4);
    window.addEventListener("click", fueraVentanadev4);
}

//Inicializar los event listeners KAREN
window.addEventListener("DOMContentLoaded", iniciarVentanadev4);

//-----------------------------------------MODAL GABRIEL -----------------------------------------
function abrirVentanadev5 (){
    const ventanadev5 = document.getElementById("desarrollador5");
    ventanadev5.classList.add("ventanadev5_mostrar");
}

//Función para cerrar ventana flotante (modal) GABRIEL
function cerrarVentanadev5(){
    const ventanadev5 = document.getElementById("desarrollador5");
    ventanadev5.classList.remove("ventanadev5_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor GABRIEL
function fueraVentanadev5(evento){
    const ventanadev5 = document.getElementById("desarrollador5");
    if (evento.target == ventanadev5){
        ventanadev5.classList.remove("ventanadev5_mostrar");
    }
}

// Agregar los event listerners GABRIEL
function iniciarVentanadev5(){
    const abrirVentanadesarrollador5 = document.getElementById("abrirVentanadesarrollador5");
    const cerrarVentanadesarrollador5 = document.querySelector(".cerrardiv5");

    abrirVentanadesarrollador5.addEventListener("click", abrirVentanadev5);
    cerrarVentanadesarrollador5.addEventListener("click", cerrarVentanadev5);
    window.addEventListener("click", fueraVentanadev5);
}

//Inicializar los event listeners GABRIEL
window.addEventListener("DOMContentLoaded", iniciarVentanadev5);

//-----------------------------------------MODAL ALAN ----------------------------------------
function abrirVentanadev6 (){
    const ventanadev6 = document.getElementById("desarrollador6");
    ventanadev6.classList.add("ventanadev6_mostrar");
}

//Función para cerrar ventana flotante (modal) ALAN
function cerrarVentanadev6(){
    const ventanadev6 = document.getElementById("desarrollador6");
    ventanadev6.classList.remove("ventanadev6_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor ALAN
function fueraVentanadev6(evento){
    const ventanadev6 = document.getElementById("desarrollador6");
    if (evento.target == ventanadev6){
        ventanadev6.classList.remove("ventanadev6_mostrar");
    }
}

// Agregar los event listerners ALAN
function iniciarVentanadev6(){
    const abrirVentanadesarrollador6 = document.getElementById("abrirVentanadesarrollador6");
    const cerrarVentanadesarrollador6 = document.querySelector(".cerrardiv6");

    abrirVentanadesarrollador6.addEventListener("click", abrirVentanadev6);
    cerrarVentanadesarrollador6.addEventListener("click", cerrarVentanadev6);
    window.addEventListener("click", fueraVentanadev6);
}

//Inicializar los event listeners ALAN
window.addEventListener("DOMContentLoaded", iniciarVentanadev6);

//-----------------------------------------MODAL PEDRO --------------------------------------
function abrirVentanadev7 (){
    const ventanadev7 = document.getElementById("desarrollador7");
    ventanadev7.classList.add("ventanadev7_mostrar");
}

//Función para cerrar ventana flotante (modal) PEDRO
function cerrarVentanadev7(){
    const ventanadev7 = document.getElementById("desarrollador7");
    ventanadev7.classList.remove("ventanadev7_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor PEDRO
function fueraVentanadev7(evento){
    const ventanadev7 = document.getElementById("desarrollador7");
    if (evento.target == ventanadev7){
        ventanadev7.classList.remove("ventanadev7_mostrar");
    }
}

// Agregar los event listerners PEDRO
function iniciarVentanadev7(){
    const abrirVentanadesarrollador7 = document.getElementById("abrirVentanadesarrollador7");
    const cerrarVentanadesarrollador7 = document.querySelector(".cerrardiv7");

    abrirVentanadesarrollador7.addEventListener("click", abrirVentanadev7);
    cerrarVentanadesarrollador7.addEventListener("click", cerrarVentanadev7);
    window.addEventListener("click", fueraVentanadev7);
}

//Inicializar los event listeners PEDRO
window.addEventListener("DOMContentLoaded", iniciarVentanadev7);

//-----------------------------------------MODAL GIBRAN ---------------------------------------
function abrirVentanadev8 (){
    const ventanadev8 = document.getElementById("desarrollador8");
    ventanadev8.classList.add("ventanadev8_mostrar");
}

//Función para cerrar ventana flotante (modal) GIBRAN
function cerrarVentanadev8(){
    const ventanadev8 = document.getElementById("desarrollador8");
    ventanadev8.classList.remove("ventanadev8_mostrar");
}

//Función para cerrar la ventana cuando se da click fuera del contenedor GIBRAN
function fueraVentanadev8 (evento){
    const ventanadev8 = document.getElementById("desarrollador8");
    if (evento.target == ventanadev8){
        ventanadev8.classList.remove("ventanadev8_mostrar");
    }
}

// Agregar los event listerners GIBRAN
function iniciarVentanadev8(){
    const abrirVentanadesarrollador8 = document.getElementById("abrirVentanadesarrollador8");
    const cerrarVentanadesarrollador8 = document.querySelector(".cerrardiv8");

    abrirVentanadesarrollador8.addEventListener("click", abrirVentanadev8);
    cerrarVentanadesarrollador8.addEventListener("click", cerrarVentanadev8);
    window.addEventListener("click", fueraVentanadev8);
}

//Inicializar los event listeners GIBRAN
window.addEventListener("DOMContentLoaded", iniciarVentanadev8);
