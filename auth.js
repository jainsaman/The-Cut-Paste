const isLoggedIn = () => {
    return localStorage.getItem("name") !== null;
}

// Register Functionality
const register = (event) => {
    let name = document.getElementById('user-name').value
    let email = document.getElementById('user-email').value
    let password = document.getElementById('password').value
    localStorage.setItem('Password', password)
    localStorage.setItem('Email', email)
    localStorage.setItem('Name', name)
    localStorage.setItem('isLoggedIn', true)
    alert("Registered Successfully")
    window.location.href = "index.html"
}
// Login Functionality
const login = (event) => {
    let email = document.getElementById('user-email-login').value
    let password = document.getElementById('password-login').value
    if (email === localStorage.getItem('Email') && password === localStorage.getItem('Password')) {
        alert("Login Successful")
        localStorage.setItem('isLoggedIn', true)
        window.location.href = "index.html"
    } else {
        alert("Invalid Email or Password")
    }
}