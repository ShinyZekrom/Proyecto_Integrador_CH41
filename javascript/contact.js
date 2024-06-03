
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

      // Inicializar bandera de validación
      let Isvalid = true;

      // Resetear mensajes de error
      nameError.textContent = "";
      phoneError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";

      // Validar nombre
      const namePattern = /^[a-zA-Z\s]+$/;
      if (!namePattern.test(name)) {
        nameError.textContent = "El nombre debe contener solo letras y espacios.";
        Isvalid = false;
      }

      // Validar teléfono (solo números)
      const phonePattern = /^[0-9]{10}$/; //{10} significa que solo pueden ser 10 números
      if (!phonePattern.test(phone)) {
        phoneError.textContent = "Ingresa tu número a 10 dígitos.";
        Isvalid = false;
      }

      // Validar correo electrónico
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
        emailError.textContent = "Ingresa un correo electrónico válido.";
        Isvalid = false;
      }

      // Validar mensaje
      if (message.trim() === "") {
        messageError.textContent = "El mensaje no puede estar vacío.";
        Isvalid = false;
      }

      // Retornar el estado de validación
      return Isvalid;
    }
/* 
    function validateAndSendEmail(event) {
      event.preventDefault(); // Prevenir el envío del formulario por defecto

      if (validateForm()) {
        // Obtener los valores del formulario
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Enviar el correo electrónico usando EmailJS
        emailjs.send("service_9ch8skf", "template_ueznlx6", {
          from_name: name,
          from_phone: phone,
          from_email: email,
          message: message
        }).then(function(response) {
          alert("Correo enviado exitosamente!");
        }, function(error) {
          alert("Hubo un error al enviar el correo: " + JSON.stringify(error));
        });
      }
    }

     */