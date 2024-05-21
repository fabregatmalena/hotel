
function validarFormulario() { 
    // Traigo los datos del form
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verifico que los campos no estén vacíos    
    if (nombre == "" || apellido == "" || dni == "" || email == "" || password == "" ) {
        alert("Por favor complete todos los campos");
        return false;
    } 

    else {
        alert("Usuario Registrado");
        location=".formulario.html";
            
    }
    }



 
