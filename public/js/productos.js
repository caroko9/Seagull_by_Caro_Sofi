// Evento que muestra una alerta al clickear el botón crear producto

window.addEventListener("load", function () {
    let crearProducto = document.querySelector(".crearProductoButton")
  
    crearProducto.addEventListener("click", function () {
      alert("Producto cargado con éxito!")
    })
  })