const carritoDeCompras = []

const agregarProducto = (...productos) => carritoDeCompras.push(...productos)

agregarProducto("Cartuchera", "lapiz", "boligoma", "ñoquis")

console.log(carritoDeCompras)