// Borrar el 4 -> no exite un método en js que borre un elemento de forma directa de un array por eso se hace un filtro inverso, dejando pasar a quienes sean distintos al elemento que deseamos borrar

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const nuevoNumeros = numeros.filter((numero) => {
  if (numero !== 4) {
    return numero;
  }
});

console.log(nuevoNumeros);
