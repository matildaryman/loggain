let form = document.getElementById("logIn");

//Variabler som innehåller förbestämd inloggningsinformation
const user = "test";
const pass = "1234";

//Den första första funktionen som ser till att de två nya sidorna är dolda på den första sidan användaren ser
let homePage = function fn1(){
    let success = document.getElementById("success").style.visibility = "hidden";
    let error = document.getElementById("error").style.visibility = "hidden";
};

//Den andra funktionen som ser till att första sidan och felmeddelandet inte syns, men inloggningssidan syns
let logInPage = function fn2(){
    let logIn = document.getElementById("logIn").style.display = "none";
    let success = document.getElementById("success").style.visibility = "visible";
    let error = document.getElementById("error").style.visibility = "hidden";
    let logOut = document.getElementById("logOut").onclick = function buttonOut(){
        localStorage.clear();
        location.href = "index.html";
        console.log(localStorage);
    }
    localStorage.setItem("nameStored", user);
    localStorage.setItem("passStorage", pass);
}

//Den tredje funktionen som ser till att första sidan och inloggningssidan sidan inte syns, men felmeddelandet syns
let errorPage = function fn3(){
    let logIn = document.getElementById("logIn").style.display = "none";
    let success = document.getElementById("success").style.display = "none";
    let error = document.getElementById("error").style.visibility = "visible";
    let tryAgain = document.getElementById("tryAgain").onclick = function buttonRetry(){
        location.href = "index.html";
    }
}

//En if sats kollar först om local storage innehåller användarens information. Gör den det (dvs användren har inte
//loggat ut ännu) hamnar vi på inloggningssidan. Finns inte innehållet hamnar vi på första sidan
if(localStorage.getItem("nameStored") === null && localStorage.getItem("passStorage") === null){
    homePage();
}else{
    logInPage();
}

//Vårt event som innehåller en if sats. Lyssnar efter ett submit och kör igång if eller else beroende på vad användaren skriver in
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if(username.value === user && password.value === pass){
        logInPage();
    }else{
        errorPage();
    }
});