function obtenerNumeroEnteroPositivo() {
  while (true) {
      const numero = parseInt(prompt("Introduce un número entero positivo:"));
      if (!isNaN(numero) && numero > 0) {
          return numero;
      } else {
          alert("El número debe ser un entero positivo");
      }
  }
}

function sumatorio() {
  const numero = obtenerNumeroEnteroPositivo();
  let suma = 0;
  for (let i = 1; i <= numero; i++) {
      suma += i;
  }
  console.log("El sumatorio de los números del 1 al ${numero} es ${suma}.");
}

sumatorio();
  