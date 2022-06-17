const inpNombre = document.querySelector("#nombre-apellido");
const inpEmail = document.querySelector("#email");
const inpMensaje = document.querySelector("#pregunta");
const btnEnviar = document.querySelector("#enviar");

btnEnviar.addEventListener("click", formEnviar);

function formEnviar(e) {
    e.preventDefault();
    console.log(inpNombre.value);
    console.log(inpEmail.value);
    console.log(inpMensaje.value);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su mensaje fue enviado. Le daremos respuesta vía email',
        showConfirmButton: false,
        timer: 1500
    })
}