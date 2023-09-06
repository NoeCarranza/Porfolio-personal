
function hideErrorMessages() {
    var errorElements = document.querySelectorAll('.formulario-error');
    errorElements.forEach(function (element) {
        element.style.display = 'none';
    });
}

function displaySuccessMessage() {
    alert('Message sent successfully!');
}

window.addEventListener('load', hideErrorMessages);


document.getElementById('formulario').addEventListener('submit', function (event) {
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('mail');
    var asuntoInput = document.getElementById('asunto');
    var mensajeInput = document.getElementById('mensaje');

    var nombreError = document.getElementById('nombre-error');
    var emailError = document.getElementById('email-error');
    var asuntoError = document.getElementById('asunto-error');
    var mensajeError = document.getElementById('mensaje-error');

    var isValid = true;

    if (nombreInput.value.trim() === '') {
        nombreInput.classList.add('error');
        nombreError.style.display = 'block';
        isValid = false;
    } else {
        nombreInput.classList.remove('error');
        nombreError.style.display = 'none';
    }

    if (emailInput.value.trim() === '') {
        emailInput.classList.add('error');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailInput.classList.remove('error');
        emailError.style.display = 'none';
    }

    if (asuntoInput.value.trim() === '') {
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

        displaySuccessMessage();
    } else {
        event.preventDefault();
    }
});
