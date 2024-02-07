// Pegando os campos do formulario do site
const form = document.getElementById("form")
const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")
const userPhone = document.getElementById("userPhone")
const userWeb = document.getElementById("userWeb")
const btnForm = document.getElementById("btn-submit-form")
const navBar = document.getElementById("navBar")

//menu mobile
function BtnClose() {

    if (navBar.classList.contains("small:hidden") || navBar.classList.contains("xsmall:hidden")) {

        navBar.classList.remove("small:hidden")
        navBar.classList.remove("xsmall:hidden")
    } else {
        navBar.classList.add("small:hidden")
        navBar.classList.add("xsmall:hidden")
    }
}
//validar nome 
function checkInputUsername() {
    const usernameValue = userName.value;

    if (usernameValue === "") {

        errorAlert(userName, "Preencha com um Nome!");

    } else if (usernameValue.length < 8) {

        errorAlert(userName, "O nome deve ter no minimo 8 caracteres!");
    }
    else {
        const formItem = userName.parentElement;
        formItem.className = "form-content"
    }

}
//validar email
function checkInputEmail() {

    const ValidationExpressionEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const emailValue = userEmail.value;

    if (emailValue === "") {

        errorAlert(userEmail, "O email é obrigatório.");

    } else if (!ValidationExpressionEmail.test(emailValue)) {

        errorAlert(userEmail, "Digite um E-mail Valido!.");
    }
    else {
        const formItem = userEmail.parentElement;
        formItem.className = "form-content";
    }
}
//Validar telefone celular
function checkInputPhone() {

    const Phone = userPhone.value;
    const ValidationExpressionPhone = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/

    if (Phone === "") {

        errorAlert(userPhone, "O Número de Telefone é obrigatório.");
    } else if (!ValidationExpressionPhone.test(Phone)) {

        errorAlert(userPhone, "Digite um Número de Telefone Valido!");

    } else {

        const formItem = userPhone.parentElement;
        formItem.className = "form-content";
    }
}
//Mandar mensagem de erro para o usuário
function errorAlert(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("p")

    textMessage.innerText = message;
    formItem.className = "form-content error"
}
//Validar o formulario na hora do envio
function checkForm() {

    checkInputUsername();
    checkInputEmail();
    checkInputPhone();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content";
    });

    if (isValid) {

        HandlerFormContact();
        Swal.fire({
            title: 'Sucesso!',
            text: 'Envia com sucesso',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }
}
//Enviar formulario para o whasApp
function HandlerFormContact() {

    const { value } = userWeb;
    const ValidUrlValue = value.length < 1 ? "Não possui um site" : value;
    const EndPoint = `https://api.whatsapp.com/send/?phone=71996193437&text=Nome+Da+Pessoa:+${userName.value}%0AE-mail:+${userEmail.value}%0ATelefone:+${userPhone.value}%0AWebSite:+${ValidUrlValue}`
    window.open(EndPoint);
    cleanInput();
}
//Limpar o formulario
function cleanInput() {
    userEmail.value = ""
    userName.value = ""
    userPhone.value = ""
    userWeb.value = ""
}

//Enviar plano via WhasApp
function HandlerPlanContact(plan){

    const EndPoint = `https://api.whatsapp.com/send/?phone=71996193437&text=Quero+Adquirir+o+Plano:+${plan}`;
    window.open(EndPoint);
}
//Event Dom
form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});
userName.addEventListener("blur", () => {
    checkInputUsername();
})

userEmail.addEventListener("blur", () => {
    checkInputEmail();
})

userPhone.addEventListener("blur", () => {
    checkInputPhone()
})


