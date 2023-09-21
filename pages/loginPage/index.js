let userName = document.querySelector(".name-input");
let password = document.querySelector(".password-input");
let submitBtn = document.querySelector("button");
submitBtn.addEventListener("submit", handleLogin);
function handleLogin(e) {
  e.preventDefault();
  if (userName.value && password.value) {
    

    console.log(userName.value);
    console.log(password.value);
  } else {
    
  }
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
