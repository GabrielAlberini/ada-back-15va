// array -> colección de elementos -> los elementos estan en orden 
// array -> admiten cualquier tipo de datos
// array -> es un tipo de dato iterable -> cada elemento está en una posición

const array = [undefined, "hola", 1, null, true]

// console.log(array[3])
// console.log(array[1])

// objeto -> representa una entidad -> representa un objeto de la vida real

let marcaCelular = "Motorola"
const marcasDeCelular = ["Motorola", "Nokia", "Xiaomi", "iphone"]
const celularMotorola = ["Motorola", 3, "negro", true]

// Propiedad
// Clave/key - valor
const celular = {
  camaras: 3, 
  marca: "Xiaomi",
  carcaza: false,
  colores: ["negro", "plata", "rojo"],
  caracteristicas : {
    RAM: "4gb",
    mpx: 24
  },
  mostrar: function(){
    return `El celular de marca ${this.marca}, está disponible en estos colores: ${this.colores}.`
  }
}

// objeto -> propiedades -> clave/valor
// objeto -> los valores pueden ser de cualquier tipo de dato
// objeto -> no tiene indice -> las propiedades estan todas al mismo nivel

// para usar propiedades puedo hacerlo mediante la notación de punto

console.log(celular.camaras)
console.log(celular.caracteristicas)
console.log(celular.colores)
console.log(celular.marca)
console.log(celular.mostrar())

const persona = {
  nombre: "Gabriel",
  saludar: function(nombre) {
    return `${this.nombre} saluda a ${nombre}`
  }
}
 
console.log(persona.saludar("Rosario"))

// las propiedades que no existen en el objeto dan undefined
console.log(persona.edad)

// agregar nuevas propiedades
persona.edad = 29
console.log(persona)

// borrar propiedad
delete persona.edad
console.log(persona)

persona.auto = false
console.log(persona)

const celular1 = {
  camaras: 3, 
  marca: "Xiaomi",
  carcaza: false,
  colores: ["negro", "plata", "rojo"],
  caracteristicas : {
    RAM: "4gb",
    mpx: 24
  },
  "tiene seguro": true,
  mostrar: function(){
    return `El celular de marca ${this.marca}, está disponible en estos colores: ${this.colores}.`
  }
}

console.log(celular1.caracteristicas.mpx)
console.log(celular1["tiene seguro"])

const contrasenias = {
  pass1: "ejowj2r3",
  pass2: "kml24mkflwe"
}

// Freezar un objeto para prohibir reasignación de propiedades
Object.freeze(contrasenias)
contrasenias.pass1 = "2jmeo12"
console.log(contrasenias)







// console.log(celular1.carcaza, "<-- aca")
// console.log(celular1.colores[2])
// console.log(celular1.mpx)
// console.log(celular1.caracteristicas.mpx[0])