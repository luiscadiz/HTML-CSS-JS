const mail = document.getElementById("fmail");
const mensaje = document.getElementById("fmensaje");
const buttonForm = document.getElementById("submit-button");


const sendData = (email) => {
    if(mail.value !== "" && mensaje.value != "")
        alert(`Te enviamos los datos a ${mail.value}`);
}

buttonForm.addEventListener("click",sendData);

