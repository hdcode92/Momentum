const loginForm = document.querySelector("#login-form");
const loginInput =  document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const inputbox = document.querySelector(".inputbox");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
const tdf = document.getElementById("todo-form");


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);}

function paintGreetings(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    tdf.classList.remove(HIDDEN_CLASSNAME);
    inputbox.remove();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    greeting.innerText = "What is your name?";
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    tdf.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    } else {
    paintGreetings(savedUsername);
};
