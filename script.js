const h2 = document.querySelector("h2");

h2.style.color = "white";
h2.style.fontSize = "48px";

const button = document.querySelector("button");

button.style.color = "white";
button.style.fontSize = "12px";
button.style.backgroundColor = "blue";
button.style.border = "2px black";
button.style.padding = "10px 20px";
button.style.cursor = "pointer";

const userInput = document.getElementById("login-usuario");

userInput.classList.add("error");

const msgUserError = document.querySelector(".error-text");

msgUserError.classList.add("visible");

//Dessa vez, o usuário acertou o username, porém, errou a senha. Portanto, o input de username precisa ter a estilização de "correct" sem mensagem de erro, e o input de senha precisa ter a estilização de "error" e a mensagem de erro. tudo isso precisa ser feito apenas usando JS, sem alterar os arquivos HTML nem CSS, mas podendo alterar o código escrito previamente no arquivo JS caso acharem necessário.

userInput.classList.remove("error");
userInput.classList.add("correct");

//userInput.classList.replace("error", "correct");
msgUserError.classList.remove("visible");

const passInput = document.querySelectorAll(".error-text");

passInput[1].classList.add("visible");
