function obtenerNumeroEnteroPositivo() {
    while (true) {
        const numero = parseInt(prompt("Por favor, introduce un número entero positivo:"));
        if (!isNaN(numero) && numero > 0) {
            return numero;
        } else {
            alert("El número debe ser un entero positivo. Por favor, inténtalo de nuevo.");
        }
    }
}

function creciente() {
    const numeros = [];

    for (let i = 1; i <= 4; i++) {
        numeros[i - 1] = obtenerNumeroEnteroPositivo();
    }

    let esCreciente = true;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] <= numeros[i - 1]) {
            esCreciente = false;
            break;
        }
    }

    if (esCreciente) {
        console.log("Los números están en orden estrictamente creciente.");
    } else {
        console.log("Los números no están en orden estrictamente creciente.");
    }
}

creciente();