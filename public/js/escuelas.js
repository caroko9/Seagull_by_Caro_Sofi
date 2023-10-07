// Evento que muestra una alerta al pasar el mouse por los campos del formulario
window.addEventListener('load', function() {
    let input = document.querySelectorAll('.nombre-input');
  
    for (let i = 0; i < input.length; i++) {
      input[i].addEventListener("mouseover", function() {
       this.input.onmouseOver = alert("Ingresa los datos en el formulario");
      });
    }
  });
  
