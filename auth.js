// Selectors 
const signUpBtn = document.querySelector(".message a#signUpBtn");
console.log(signUpBtn);
const signInBtn = document.querySelector(".message a#signInBtn");
const registerForm = document.querySelector("form.register-form")
const loginForm = document.querySelector("form.login-form")


// Toggle Functions
const toggleSignUp = () => {
    registerForm.classList.toggle("active");
}
const toggleSignIn = () => {
    loginForm.classList.toggle("active");
}

// Class Functionality
window.addEventListener('load', (event) => {
    registerForm.classList.add("active");
});
signUpBtn.addEventListener("click", () => {
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
});
signInBtn.addEventListener("click", () => {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");

});

