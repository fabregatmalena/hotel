function validarFormulario() { 
    // Traigo los datos del form
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verificacion de que los campos no estén vacíos    
    
    if (nombre == "" || apellido == "" || dni == "" || email == "" || password == "" ) {
        alert("Por favor complete todos los campos");
        return false;
    }

    // Si la validación es exitosa, redireccionar al formulario de reserva
    alert("Usuario registrado")
    window.location.href = 'formulario.html';
    return false;

}




 
