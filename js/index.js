
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

// else if(!ValidationExpressionPhone.test(Phone)){

//     errorAlert(userPhone, "Digite um Número de Telefone Valido!");
// }

//Validar telefone celular

function checkInputPhone() {

    const Phone = userPhone.value;
    //Expreção ainda não funciona
    //const ValidationExpressionPhone = /\([0-9]{2}\)\-[0-9]{8,9}/

    if (Phone === "") {

        errorAlert(userPhone, "O Número de Telefone é obrigatório.");
    } //else if (!ValidationExpressionPhone.test(Phone)) {

    // errorAlert(userPhone, "Digite um Número de Telefone Valido!");
    // }

    else if (Phone.length < 11) {
        errorAlert(userPhone, "Digite um Número de Telefone com DDD!");
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

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content";
    });

    if (isValid) {
        alert("ENVIADO COM SUCESSO!");
    }

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