function getValue(id) {
    return document.getElementById(id).value.trim();
}

function isEmpty(value) {
    return value === "";
}

function saveAccount(username, email, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("hasAccount", "true");
}

function loadSavedAccount() {
    let savedUsername = localStorage.getItem("username");
    let usernameInput = document.getElementById("username");

    if(savedUsername && usernameInput) {
        usernameInput.value = savedUsername;
    }
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

// log in
function signIn() {
    let username = getValue("username");
    let password = getValue("password");

    if(isEmpty(username) || isEmpty(password)) {
        alert("Please enter username and password!");
        return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("lastLoginUsername", username);

    alert("Login successful!");
    goHome();
}

// sign up
function signUp() {
    let username = getValue("signupUsername");
    let email = getValue("signupEmail");
    let password = getValue("signupPassword");
    let confirmPassword = getValue("confirmPassword");

    if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)) {
        alert("Please fill all fields!");
        return;
    }

    if(username.length < 3) {
        alert("Username must be at least 3 characters!");
        return;
    }

    if(email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email!");
        return;
    }

    if(password.length < 4) {
        alert("Password must be at least 4 characters!");
        return;
    }

    if(password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    saveAccount(username, email, password);

    alert("Account created successfully!");
    goToLogin();
}

loadSavedAccount();
