
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

      // Validar teléfono (solo números)
      const numCel = /^[0-9]{10}$/; //{10} significa que solo pueden ser 10 números
      if (!numCel.test(phone)) {
        phoneError.textContent = "Ingresa tu número celular.";
        Isvalid = false;
      }

      // Validar correo electrónico
      const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!patronCorreo.test(email)) {
        emailError.textContent = "Ingresa un correo electrónico.";
        Isvalid = false;
      }

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
          alert("Mensaje enviado exitosamente.") 
          limpiarFormulario();
        });
      } else {console.log("datos invalidos")};
    }// función enviarFormulario

    let alertMessage = document.getElementById("alertMessage").innerHTML

      document.getElementById("contactForm").addEventListener("submit", function(event) {
      validateForm(); // Validar formulario antes de enviar
      enviarFormulario(event); // Enviar formulario si es válido
    }); //evento submit botón 