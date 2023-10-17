
window.addEventListener('load', function () {
//    /*let input = document.querySelectorAll('.nombre-input');

//     for (let i = 0; i < input.length; i++) {
//         input[i].addEventListener("mouseover", function () {
//             this.input.onmouseOver = alert("Ingresa los datos en el formulario");
//         });
//     };*/


    //intentar borrando el require del formulario
    let formulario = document.querySelector('.inscripcion');

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let nombreInput = document.getElementById('nombre');


        if (nombreInput.value = "") {
            alert("Este campo no puede estar vacío");
            return;
        }
    })

})


//Al tocar boton enviar, te sale este mensaje y redirige al usuario al HOME 
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.alert(" Genial! Tu formulario ha sido enviado con éxito. Nos comunicaremos por email para informarte sobre el estado de tu Escuela ¡Esperamos puedas sumarte a nuestra gran familia de surfers! Te redirigiremos al home en unos segundos");
  
    // Redirigir al usuario al home
    setTimeout(function() {
      window.location.href = '/'; 
    }, 3000); 
  });
  