let userName= document.querySelector('.name-input')
let password= document.querySelector('.password-input')
let submitBtn=document.querySelector("button")
submitBtn.addEventListener('click', handleLogin)
function handleLogin(e){
    e.preventDefault()
}