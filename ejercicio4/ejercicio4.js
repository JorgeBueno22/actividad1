function obtenerNumero() {
    while (true) {
        const numero = parseInt(prompt("Introduce un número entero:"));
        if (!isNaN(numero)) {
            return numero;
        } else {
            alert("Debes introducir un número entero válido.");
        }
    }
}

function realizarOperacion(operando1, operando2, operacion) {
    switch (operacion) {
        case "suma":
            return operando1 + operando2;
        case "resta":
            return operando1 - operando2;
        case "multiplicacion":
            return operando1 * operando2;
        case "division":
            if (operando2 === 0) {
                return "No se puede dividir por cero.";
            }
            return operando1 / operando2;
        default:
            return "Operación no válida.";
    }
}

function resultado() {
    let operando1 = obtenerNumero();
    let operando2 = obtenerNumero();

    while (true) {
        const operacion = prompt("Introduce la operación a realizar (suma, resta, multiplicacion, division o FIN para finalizar):").toLowerCase();

        if (operacion === "fin") {
            break;
        }

        const resultado = realizarOperacion(operando1, operando2, operacion);
        console.log(`Resultado de ${operando1} ${operacion} ${operando2} = ${resultado}`);

        // Actualizar operando1 para que sea el resultado de la operación
        operando1 = resultado;
        operando2 = obtenerNumero();
    }

    console.log("Calculadora finalizada.");
}

resultado();