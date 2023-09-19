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
