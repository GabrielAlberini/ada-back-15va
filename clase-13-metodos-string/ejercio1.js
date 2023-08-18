// Programar un juego que pida al usuario adivinar un numero aleatorio (entre 0 y 5) generado por un algoritmo. 

// El jugador tiene 3 intentos, los cuales ingresara juntos desde la  terminal como parametro, es decir:

// node ejercicio.js --intento1 3 --intento2 5 --intento3 6

// Crear dinamicamente una collection en la que se muestre el historial de jugadas realizadas

const turnos = [
  {
    jugador: 1,
    maquina: 3,
    gano: false
  },
  {
    jugador: 7,
    maquina: 7,
    gano: true
  }
]

// 1 - generar un numero aleatorio
// 2 - tomar las jugadas del usuario
// 3 - validar/comparar resultado
// 4 - generar la collection (mostrar resultados)

// 1 - declaran las variables
// 2 - declaran las funciones
// 3 - invocan las funciones

let numeroDeJugadas = 3
let jugadas 
let numeroRandom
let objetoConResultados
let argumentos = process.argv


// esta funcion debe retornar un array solo con los valores de cada jugada -> [3,4,1]
const crearJugadasHumano = (args) => {
  let parametros = args.slice(2)
  const arrayDeJugadas = parametros.filter((parametro) => {
    if(parametro.length === 1) {
      return parametro
    }
  })

  const valoresEnNumero = arrayDeJugadas.map((jugada) => Number(jugada))
  return valoresEnNumero
}

const generarNumeroRandom = () => {
  // Math.floor() es un método del objeto Math que redondea un número dado hacia el número entero anterior. 
  const numeroAleatorio = Math.floor(Math.random() * 5) + 1
  return numeroAleatorio
}

const validarGanador = (jugadasHumano) => {
  
  const jugadasPc = []
  const resultadoJugada = []

  jugadasHumano.forEach((jugada) => {
    let numeroAleatorio = generarNumeroRandom()
    jugadasPc.push(numeroAleatorio)

    if(jugada === numeroAleatorio) {
      resultadoJugada.push(true)
    } else {
      resultadoJugada.push(false)
    }
  })

  const resultados = {
    jugadasPc: jugadasPc,
    resultados: resultadoJugada
  }

  return resultados
} 

const mostrarResultados = (jugadaPc, jugadaHumano, resultados) => {
  const collection = []

  for (let i = 0; i < numeroDeJugadas; i++) {
    collection.push({
      jugador: jugadaHumano[i],
      pc: jugadaPc[i],
      gano: resultados[i]
    })
  }

  return collection
}

//--------------------------------------------------------------------------//

const main = () => {
  const jugadasUsuario = crearJugadasHumano(argumentos)
  const resultados = validarGanador(jugadasUsuario)
  const collection = mostrarResultados(resultados.jugadasPc, jugadasUsuario, resultados.resultados)
  console.log(collection)
}

main()
