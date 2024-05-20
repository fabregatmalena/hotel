document.getElementById('formulariojs').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Evita el envío del formulario

    let errors = 0
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let dni = document.getElementById('dni').value;
    let imgdni = document.getElementById('imgdni').value;
    let provincia = document.getElementById('provincia').value;
    let ciudad = document.getElementById('ciudad').value;
    let tel = document.getElementById('tel').value;
    let entrada = document.getElementById('entrada').value;
    let email = document.getElementById('email').value;
    let noches = document.getElementById('noches').value;
    let nrotarj = document.getElementById('nrotarj').value;
    let titular = document.getElementById('titular').value;
    let codigo = document.getElementById('codigo').value;
    
    if (nombre === '') {
        errors.push("El nombre es obligatorio");
    }
 
  if (apellido === '') {
        errors.push("El apellido es obligatorio");
    }

  if (dni === '') {
        errors.push("El dni es obligatorio");
    }

  if (imgdni === '') {
        errors.push("La imagen del DNI es obligatorio");
    }

  if (provincia === '') {
        errors.push("La provincia es obligatorio");
    }
 
  if (ciudad === '') {
        errors.push("La ciudad es obligatorio");
    }

  if (tel === '') {
        errors.push("El Telefono es obligatorio");
    }

  if (entrada === '') {
        errors.push("La fecha de entrada es obligatorio");
    }

  if (email === '') {
        errors.push("El email es obligatorio");
    }

  if (noches === '') {
        errors.push("La cantidad de noches es obligatorio");
    }

  if (nrotarj === '') {
        errors.push("El número de la tarjeta es obligatorio");
    }

    if (titular === '') {
        errors.push("El nombre del titular es obligatorio");
    }
    if (codigo === '') {
       errors.push("El codigo de seguridad de la tarjeta es obligatorio");
    
    } 
    
    else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.push("El email no es válido");
    }

    if (errors.length > 0) {
        document.getElementById('errorMessages').innerHTML = "Complete todos los campos requeridos en rojo";
    } 
    else {
        document.getElementById('errorMessages').innerHTML = "Formulario enviado con éxito!";
    }
});
