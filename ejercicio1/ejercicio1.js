function calcularSumatorio(numero) {
    let sumatorio = 0;
    for (let i = 1; i <= numero; i++) {
      sumatorio += i;
    }
    return sumatorio;
  }
  
  function main() {
    let numero;
    do {
      const entrada = prompt("Introduce un número entero positivo:");
      numero = parseInt(entrada);
  
      if (isNaN(numero) || numero <= 0) {
        console.log("Error: Debes ingresar un número entero positivo válido.");
      } else {
        const resultado = calcularSumatorio(numero);
        console.log(`El sumatorio de ${numero} es: ${resultado}`);
      }
    } while (isNaN(numero) || numero <= 0);
  }
  
  main();