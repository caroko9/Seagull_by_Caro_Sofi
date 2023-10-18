
window.addEventListener('load', function () {

    //intentar borrando el require del formulario
    let formulario = document.querySelector('#formescuela');

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let nombreInput = document.getElementById('nombre');


        if (nombreInput.value == "") {
            alert("Este campo no puede estar vacío");
            return;
        }
          formulario.submit()

    })

})

