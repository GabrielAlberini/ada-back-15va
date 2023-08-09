const sumar = (n1,n2) => n1 + n2 // SIEMPRE el return es un dato
const restar = (n1,n2) => n1 - n2
const multiplicar = (n1,n2) => n1 * n2
const dividir = (n1,n2) => n1 / n2

// funcion que muestre lo que retorna otra en consola
const mostrarEnConsola = returnDeFuncion => console.log(returnDeFuncion)

// main -> función principal que se encarga de invocar al resto de funciones
const main = () => {
  mostrarEnConsola(multiplicar(1,7))
  mostrarEnConsola(sumar(1,7))
  mostrarEnConsola(restar(1,7))
  mostrarEnConsola(dividir(1,7))
  mostrarEnConsola(sumar(1,7))
}

// invocar -> nombre seguido de parentesis
main()


