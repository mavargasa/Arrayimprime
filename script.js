// Arreglo de ejemplo
var arreglo = [10, 40, 30, 20, 15, 5];

// Implementar el algoritmo de ordenamiento de burbuja
for (var i = 0; i < arreglo.length - 1; i++) {
  for (var j = 0; j < arreglo.length - i - 1; j++) {
    if (arreglo[j] > arreglo[j + 1]) {
      // Intercambiar los elementos si están en el orden incorrecto
      var temp = arreglo[j];
      arreglo[j] = arreglo[j + 1];
      arreglo[j + 1] = temp;
    }
  }
}

var numeroMenor = Math.min(...arreglo);
var numeroMayor = Math.max(...arreglo);

// Mostrar el arreglo ordenado en la consola
console.log("Arreglo ordenado:", arreglo);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);
