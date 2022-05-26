// Version 5 - Login Form - 2022-05-26

'use strict';

class Usuario {
    constructor(fName, fPass, fMail) {
        this.fName = fName,
        this.fPass = fPass,
        this.fMail = fMail,
    }
}

var userList = [];



var userArray = ["admin","carlos"];
var passArray = ["admin123","123"];
var emailArray = ["admin@admin.net","roberto@net.net"];

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error")
    messageElement.classList.add(`form__message--${type}`);
}

//setFormMessage ()
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function unsetInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = null;
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        let user = document.getElementById("loginUser").value;
        let pass = document.getElementById("loginPass").value;
        let list = userArray.length;
        console.log(list);
        console.log(userArray[0]);
        console.log(passArray[0]);
        console.log(emailArray[0]);
        console.log(user);
        console.log(pass);
        let logged = false;
        let i;
        for (let i = 0; i <= (list - 1); i++) {
            console.log(i);
            if (user == userArray[i] && pass == passArray[i]) {
                logged = true;
            };
        };
        if (logged) {
            setFormMessage(loginForm, "success", "Valid Login!");
        }else{
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        };
    });
   
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
        let nUser = createAccountForm.querySelector("#signupUser");
        let nUserEmail = createAccountForm.querySelector("#signupEmail");
        let nUserPass = createAccountForm.querySelector("#signupPass");
        let nUserRPass = createAccountForm.querySelector("#signupRPass");
        
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passPattern = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{10,36}$/gmu;
        
        let validSignup = [false, false, false, false];

        if (nUser.value.length >= 4 && nUser.value.length <= 10) {
            unsetInputError(nUser);
            validSignup[0] = true;
        }else{
            setInputError(nUser, "El usuario debe ser de 4 a 10 caracteres");
        };
        
        if (emailPattern.test(nUserEmail.value.trim())) {
            unsetInputError(nUserEmail);
            validSignup[1] = true;
        }else{
            setInputError(nUserEmail, "Escriba una direccion de email valida");
        };

        if (passPattern.test(nUserPass.value.trim())) {
            unsetInputError(nUserPass);
            validSignup[2] = true;
        }else{
            setInputError(nUserPass, "El password debe tener al menos 10 caracteres, mayusculas, minusculas, numeros y caracteres especiales");
        };

        if (nUserRPass.value === nUserPass.value) {
            unsetInputError(nUserRPass);
            validSignup[3] = true;
        }else{
            setInputError(nUserRPass, "El password no coincide");
        };

        if (validSignup[0] && validSignup[1] && validSignup[2] && validSignup[3]) {
            userArray.push(nUser.value);
            passArray.push(nUserPass.value);
            emailArray.push(nUserEmail.value);
            setFormMessage(createAccountForm, "success", "User created!");
            console.log("Creamos tu usuario");
        };
        console.log(validSignup);
        console.log(userArray);
        console.log(passArray);
        console.log(emailArray);
    });        

});
