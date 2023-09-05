const URL = "https://jsonplaceholder.typicode.com/users"

//Para evitar que el formulario se envie de forma convencional

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const nacimiento = document.getElementById('nacimiento').value;

    const DataForm = {
        name: nombre + " " + apellido,
        birthdate: nacimiento
    };

    //Solicitud post con fetch

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DataForm)
    })
    .then(response => response.json())
    .then (data => {
        console.log('Respuesta del servidor:', data);
        alert('Registro exitoso')
    })
    .catch(error => {
        console.error('Error: ', error);
        alert('Hubo un error en el proceso de registro de datos.');
    });
});

