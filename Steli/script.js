//log in 
function signIn() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === "") {
        alert("Please enter username and password!");
        return;
    }

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if(!storedUsername || !storedPassword) {
        alert("No account found. Please sign up first.");
        return;
    }

    if(username !== storedUsername || password !== storedPassword) {
        alert("Invalid username or password.");
        return;
    }

    alert("Login successful!");
    window.location.href = "homepage.html";
}
function goHome() {
    window.location.href = "homepage.html";
}
function goToSignUp() {
    window.location.href = "singup.html";
}

function goToLogin() {
    window.location.href = "login.html";
}


//sing up
function signUp() {

    let username = document.getElementById("signupUsername").value;

    let email = document.getElementById("signupEmail").value;

    let password = document.getElementById("signupPassword").value;

    let confirmPassword = document.getElementById("confirmPassword").value;

    if(username === "" || email === "" || password === "" || confirmPassword === "") {

        alert("Please fill all fields!");

        return;
    }

    if(password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }

    localStorage.setItem("username", username);

    localStorage.setItem("email", email);

    localStorage.setItem("password", password);

    alert("Account created successfully!");
    window.location.href = "login.html";
}
