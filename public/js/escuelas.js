
window.addEventListener('load', function () {

    let formulario = document.querySelector('#formescuela');

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let nombreInput = document.getElementById('nombre');
        let emailInput = document.getElementById("email");
        let telefonoInput = document.getElementById("telefono");
        let paginaWebInput = document.getElementById("paginaWeb");
        let descripcionInput = document.getElementById("descripcion");
        let ubicacionInput = document.getElementById("ubicacion");
        let paisInput = document.getElementById("pais");
        
               

        if (nombreInput.value == "") {
            alert("Por favor revisa y completa todos los campos");
        }
        else if (emailInput.value == "") {
            alert("Por favor revisa y completa todos los campos");
        }
        else if (telefonoInput.value == "") {
            alert("Por favor revisa y completa todos los campos");
        }
        else if (paginaWebInput.value == "") {
            alert("Por favor revisa y completa todos los campos");
        }
        else if (descripcionInput.value == "") {
            alert("Por favor revisa y completa todos los campos");
        }
         else if (ubicacionInput.value == "") {
            alert("Por favor revisa y completa todos los campos");
        } 
        else if (paisInput.value == "") {
            alert("Por favor revisa y completa todos los campos");
        }

    formulario.submit()

    }
    )}
)

  
