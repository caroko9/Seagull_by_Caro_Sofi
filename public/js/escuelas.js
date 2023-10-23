
window.addEventListener('load', function () {

    let formulario = document.querySelector('#formescuela');

    formulario.addEventListener("submit", function (e) {
      
    let errores= [];

        let nombreInput = document.getElementById('nombre');
        let emailInput = document.getElementById("email");
        let telefonoInput = document.getElementById("telefono");
        let paginaWebInput = document.getElementById("paginaWeb");
        let descripcionInput = document.getElementById("descripcion");
        let ubicacionInput = document.getElementById("ubicacion");
        let paisInput = document.getElementById("pais");
        
               

        if (nombreInput.value == "") {
          errores.push( alert("Por favor revisa y completa todos los campos"));
        }
        else if (emailInput.value == "") {
            errores.push( alert("Por favor revisa y completa todos los campos"));
        }
        else if (telefonoInput.value == "") {
            errores.push( alert("Por favor revisa y completa todos los campos"));
        }
        else if (paginaWebInput.value == "") {
            errores.push( alert("Por favor revisa y completa todos los campos"));
        }
        else if (descripcionInput.value == "") {
            errores.push( alert("Por favor revisa y completa todos los campos"));
        }
         else if (ubicacionInput.value == "") {
            errores.push( alert("Por favor revisa y completa todos los campos"));
        } 
        else if (paisInput.value == "") {
            errores.push( alert("Por favor revisa y completa todos los campos"));
        }

        if (errores.length > 0) {
            e.preventDefault();
        } else {

            formulario.submit()
        }

           }
    )}
)


window.addEventListener("load", function () {
    let enviar = document.querySelector(".submit")

    enviar.addEventListener("click", function () {
      alert("Gracias por registrarte! Te enviaremos por email el formulario de pago")
    })
})

