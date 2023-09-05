function hideErrorMessages() {
    var errorElements = document.querySelectorAll('.formulario-error');
    errorElements.forEach(function (element) {
        element.style.display = 'none';
    });
}

// Function to display a success message
function displaySuccessMessage() {
    alert('Message sent successfully!');
}

// Call the function to hide error messages on page load
window.addEventListener('load', hideErrorMessages);

// Add the form validation logic here (as shown in the previous response)
document.getElementById('formulario').addEventListener('submit', function (event) {
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('mail');
    var asuntoInput = document.getElementById('asunto');
    var mensajeInput = document.getElementById('mensaje');

    var nombreError = document.getElementById('nombre-error');
    var emailError = document.getElementById('email-error');
    var asuntoError = document.getElementById('asunto-error');
    var mensajeError = document.getElementById('mensaje-error');

    var nombrePattern = /^[a-zA-ZÀ-ÿ\s]{1,16}$/;
    var emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var asuntoPattern = /^[a-zA-ZÀ-ÿ\s]{1,16}$/;

    var isValid = true;

    if (!nombrePattern.test(nombreInput.value)) {
        nombreInput.classList.add('error');
        nombreError.style.display = 'block';
        isValid = false;
    } else {
        nombreInput.classList.remove('error');
        nombreError.style.display = 'none';
    }

    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add('error');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailInput.classList.remove('error');
        emailError.style.display = 'none';
    }

    if (!asuntoPattern.test(asuntoInput.value)) {
        asuntoInput.classList.add('error');
        asuntoError.style.display = 'block';
        isValid = false;
    } else {
        asuntoInput.classList.remove('error');
        asuntoError.style.display = 'none';
    }

    if (mensajeInput.value.trim() === '') {
        mensajeInput.classList.add('error');
        mensajeError.style.display = 'block';
        isValid = false;
    } else {
        mensajeInput.classList.remove('error');
        mensajeError.style.display = 'none';
    }

    if (isValid) {
        // If all fields are valid, display a success message
        displaySuccessMessage();
    } else {
        event.preventDefault();
    }
});