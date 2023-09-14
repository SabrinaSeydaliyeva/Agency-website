let form=document.querySelector("form")
let emailInput=document.querySelector(".email-input")
let nameInput=document.querySelector(".name-input")
let passwordInput=document.querySelector(".password-input")

form.addEventListener("submit", handleRegister)
let dataBase=[]
function handleRegister(e) {
e.preventDefault()
console.log(emailInput.value);
console.log(nameInput.value);
console.log(passwordInput.value);

let user ={
    email: emailInput.value,
    name: nameInput.value,
    password: passwordInput.value,
}
dataBase.push(user)

console.log(dataBase);
}

