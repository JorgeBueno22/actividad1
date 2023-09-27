function esEnteroPositivo(numero) {
    return Number.isInteger(numero) && numero > 0;
  }
  
  function main() {
    const numeros = [];
    for (let i = 1; i <= 4; i++) {
      let numero;
      do {
        const entrada = prompt(`Introduce el número ${i}:`);
        numero = parseInt(entrada);
  
        if (!esEnteroPositivo(numero)) {
          console.log("Error: Debes ingresar un número entero positivo válido.");
        }
      } while (!esEnteroPositivo(numero));
  
      numeros.push(numero);
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
  
  main();