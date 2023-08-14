// objetos -> datos complejos -> conjunto de datos
// a diferencia de los array no tienen índice
// propiedades -> clave (nombre) -> valor (dato)

const persona = {
  name: "gabriel",
  age: 29,
  "gusto fav de helado": ["frutilla", "limón", "vainilla"],
  saludar: function(){
    console.log("Hola me llamo Gabriel")
  }
}

// notación de punto -> cuando conozco el nombre de la propiedad
console.log(persona.age)

let prop = "age"
// notación de corchetes -> cuando la prop tiene más de una palabra o mediante una variable
console.log(persona[prop]) 
console.log(persona["gusto fav de helado"])

// método
persona.saludar()

// método en array
let array = []
array.push()

// agregar propiedad a un objeto
persona.colorFav = "celeste"
console.log(persona)
