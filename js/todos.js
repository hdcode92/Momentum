let tds  = localStorage.getItem(TODOS_KEY);
const none = document.querySelector("#none");

if (tds !== null) {
    none.classList.remove(HIDDEN_CLASSNAME)
    none.innerText = "TO DO LIST"

}

