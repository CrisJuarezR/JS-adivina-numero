let min = 1;
let max = 100;
let prediccionActual;

function prediccionAlakazam() {
    // Calcula un nuevo intento de adivinanza
    prediccionActual = Math.floor((min + max) / 2);
    document.getElementById('adivinar-numero').textContent = `¿Tu número es ${prediccionActual}?`;
    // Mostrar las preguntas y ocultar el botón de inicio
    document.getElementById('adivinar-numero').style.display = '';
    document.querySelectorAll('button').forEach(button => {
        if(button.id !== 'iniciar-juego') button.style.display = '';
    });
}

function respuestaUsuario(response) {
    if (response === 'correcto') {
        alert(`¡Sabía que era ${prediccionActual}! ¿Empezamos de nuevo?`);
        // Ocultar preguntas y mostrar el botón de inicio para reiniciar
        document.getElementById('adivinar-numero').style.display = 'none';
        document.querySelectorAll('button').forEach(button => {
            if(button.id !== 'iniciar-juego') button.style.display = 'none';
        });
        document.getElementById('iniciar-juego').style.display = '';
    } else if (response === 'mas-bajo') {
        max = prediccionActual - 1;
        prediccionAlakazam();
    } else if (response === 'mas-alto') {
        min = prediccionActual + 1;
        prediccionAlakazam();
    }

    // Verificar si aún es posible adivinar
    if (min > max) {
        alert("Parece que hay un error. Intentemos de nuevo.");
        min = 1;
        max = 100;
        prediccionAlakazam();
    }
}

function iniciarJuego() {
    // Reiniciar el juego
    min = 1;
    max = 100;
    document.getElementById('iniciar-juego').style.display = 'none'; // Ocultar botón de inicio
    prediccionAlakazam(); // Iniciar las adivinanzas
}

// Ocultar botones de control hasta que el juego inicie
document.getElementById('adivinar-numero').style.display = 'none';
document.querySelectorAll('button').forEach(button => {
    if(button.id !== 'iniciar-juego') button.style.display = 'none';
});
