function validateForm() {
  // Obtener valores de los campos del formulario
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Obtener elementos de mensajes de error
  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Mensaje de enviado
  const alertMessage = document.getElementById("alertMessage");

  // Inicializar validación
  let Isvalid = true;

  // Resetear mensajes de error cuando esté correcto
  nameError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  // Validar nombre
  const patronNombre = /^[a-zA-Z\s]+$/; // ^indica que debe iniciar con lo que tiene a continuación
  if (!patronNombre.test(name)) {
    nameError.textContent = "Coloca un nombre válido.";
    Isvalid = false;
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7db0d1ac658900171e3ce9186eeff48147a88687
  // Validar teléfono (solo números)
  const numCel = /^(?!0{10})[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; // Se coloca negación al inicio que indique que no puedan ser puros 0s, y se utiliza función de ihateRegex para utilizar cualquier número de algún país donde se pueda añadir el + y clave lada o solo los 10 dígitos 
  if (!numCel.test(phone)) {
    phoneError.textContent = "Ingresa tu número celular.";
    Isvalid = false;
  }

  // Validar correo electrónico
  const patronCorreo = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/; // expresión ihateregex que indica los posibles patrones de correo.
  if (!patronCorreo.test(email)) {
    emailError.textContent = "Ingresa un correo electrónico.";
    Isvalid = false;
  }
<<<<<<< HEAD
=======
      // Validar teléfono (solo números)
      const numCel = /^(?!0{10})[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; // Se coloca negación al inicio que indique que no puedan ser puros 0s, y se utiliza función de ihateRegex para utilizar cualquier número de algún país donde se pueda añadir el + y clave lada o solo los 10 dígitos 
      if (!numCel.test(phone)) {
        phoneError.textContent = "Ingresa tu número celular.";
        Isvalid = false;
      }

      // Validar correo electrónico
      const patronCorreo = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/; // expresión ihateregex que indica los posibles patrones de correo.
      if (!patronCorreo.test(email)) {
        emailError.textContent = "Ingresa un correo electrónico.";
        Isvalid = false;
      }
>>>>>>> 43317b0ba3cf8cbbf07554eedf624bde718b337b
=======
>>>>>>> 7db0d1ac658900171e3ce9186eeff48147a88687

  // Validar mensaje
  if (message.trim() === "") {
    messageError.textContent = "Mensaje Inválido.";
    Isvalid = false;
  }

  // Retornar validación
  return Isvalid;
}// función validateform

function limpiarFormulario(){
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}// función limpiarformulario

function mostrarAlerta(tipo, mensaje) {
  const alertMessage = document.getElementById("alertMessage");
  alertMessage.className = `alert alert-${tipo}`;
  alertMessage.textContent = mensaje;
  alertMessage.classList.remove("d-none");
}

function enviarFormulario(event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  if (validateForm()) {
    // Obtener los valores del formulario
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Enviar el correo electrónico usando EmailJS
    emailjs.send("service_xlnbxdg", "template_vr8df8f", {
      from_name: name,
      from_phone: phone,
      from_email: email,
      message: message
    }).then(function(response) {
      mostrarAlerta("success", "Mensaje enviado exitosamente.");
      limpiarFormulario();
    }).catch(function(error) {
      mostrarAlerta("danger", "Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
    });
  } else {
    mostrarAlerta("danger", "Por favor, corrige los errores en el formulario.");
  }
}// función enviarFormulario

document.getElementById("contactForm").addEventListener("submit", function(event) {
  enviarFormulario(event); // Enviar formulario si es válido
}); //evento submit botón 