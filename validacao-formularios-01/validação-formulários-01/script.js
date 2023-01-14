// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// e-mail
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");


// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function(){ usernameLabel.classList.add("required-popup")})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", function(){ usernameLabel.classList.remove("required-popup")})


// Validar valor do input
usernameInput.addEventListener("change", (e) =>{
    let valor = e.target.value.trim();
    if(valor.length <3){
        usernameInput.classList.add("error");
        usernameInput.classList.remove("correct");
        usernameHelper.innerText = "Minimo 3 caracteres";
        usernameHelper.classList.add("visible");
    }else{        
        usernameInput.classList.add("correct");
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
    }
    })


// Validar e-mail

emailInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor.includes("@") && valor.includes(".com")) {
        emailInput.classList.add("correct");
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");

    }else{
        emailInput.classList.add("error");
        emailInput.classList.remove("correct");
        emailHelper.innerText = "e-mail Inválido";
        emailHelper.classList.add("visible");
    }
})