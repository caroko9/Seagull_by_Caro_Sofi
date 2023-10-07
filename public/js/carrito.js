
// Variable carrito donde van los productos agregados, usando sessionStorage
let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  sessionStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar en Session Storage
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
  carrito = carrito.filter(producto => producto.id !== id);
  sessionStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar Session Storage
}

// Evento que muestra una alerta al clickear el botón de pago
window.addEventListener("load", function () {
  let pagarbutton = document.querySelector(".pagarbutton")

  pagarbutton.addEventListener("click", function () {
    alert("Te enviaremos los medios de pagos via email!")
  })
})





