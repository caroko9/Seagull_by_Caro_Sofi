
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

