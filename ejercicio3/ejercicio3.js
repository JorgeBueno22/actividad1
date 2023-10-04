function obtenerNumeroEntre1Y100() {
    while (true) {
        const numero = parseInt(prompt("Introduce un número entero entre 1 y 100:"));
        if (!isNaN(numero) && numero >= 1 && numero <= 100) {
            return numero;
        } else {
            alert("El número debe ser un entero entre 1 y 100");
        }
    }
}

function divisible() {
    const numero = obtenerNumeroEntre1Y100();
    let mensaje = `El número ${numero}:\n`;

    if (numero % 2 === 0) {
        mensaje += "a. Es divisible entre 2.\n";
    }

    if (numero % 3 === 0) {
        mensaje += "b. Es divisible entre 3.\n";
    }

    if (numero % 5 === 0) {
        mensaje += "c. Es divisible entre 5.\n";
    }

    if (numero % 10 === 0) {
        mensaje += "d. Es divisible entre 10.\n";
    }

    console.log(mensaje);
}

divisible();