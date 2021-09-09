let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let verifyPass = document.getElementById("verifyPass");

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", submitForm)

function submitForm(e){
    

    if (verifyPass.value != password.value){
        e.preventDefault();
        let error = document.getElementById("verify");
        document.querySelector("#verify").style.color = "red";
        error.innerText = "Password do not Match!";
        
         
    }
}


console.log(document.querySelector("#verify"));





