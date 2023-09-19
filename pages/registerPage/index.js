let form = document.querySelector("form");
let emailInput = document.querySelector(".email-input");
let nameInput = document.querySelector(".name-input");
let passwordInput = document.querySelector(".password-input");
let btn = document.querySelector("button");
let errorMsj=document.querySelector(".error-msj")


form.addEventListener("submit", handleRegister);
let dataBase = [];
function handleRegister(e) {
  e.preventDefault();
  if (emailInput.value && nameInput.value && passwordInput.value) {
    console.log(emailInput.value);
    console.log(nameInput.value);
    console.log(passwordInput.value);
  } else {
  }

  let user = {
    email: emailInput.value,
    name: nameInput.value,
    password: passwordInput.value,
  };
  dataBase.push(user);
  form.reset();
  console.log(dataBase);
}

let allInputs = document.querySelectorAll("input");
console.log(allInputs);
allInputs.forEach((element) => {
  element.addEventListener("keyup", clickMe);
});
function clickMe (e) {
    if (emailInput.value && nameInput.value && passwordInput.value) {

    btn.style.background="red";
    btn.disabled=false;
    errorMsj.style.display = "none";

    }
    else {
        btn.style.background="gray";
        btn.disabled=true;
        errorMsj.style.display = "block";

    }
}