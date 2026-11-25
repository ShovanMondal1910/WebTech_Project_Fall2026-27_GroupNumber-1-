let correctUsername = "stuff";
let correctPassword = "stuff123";

function validate_username() {
    let username = document.getElementById("username").value.trim();
    let error = document.getElementById("UsernameError");

    if (username === "") {
        error.innerHTML = "User name is required";
        return false;
    }
    else if (username.length < 4) {
        error.innerHTML = "User name must be at least 4 characters";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_password() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("PasswordError");

    if (password === "") {
        error.innerHTML = "Password is required";
        return false;
    }
    else if (password.length < 6) {
        error.innerHTML = "Password must be at least 6 characters";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function collect_data() {
    let a = validate_username();
    let b = validate_password();

    return a && b;
}

function check_login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let error = document.getElementById("LoginError");

    if (username === correctUsername && password === correctPassword) {
        error.innerHTML = "";
        return true;
    }
    else {
        error.innerHTML = "Invalid user name or password";
        return false;
    }
}

function toggle_password() {
    let password = document.getElementById("password");
    let checkbox = document.getElementById("showPassword");

    if (checkbox.checked) {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("loginForm");
    document.getElementById("showPassword").addEventListener("change", toggle_password);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("LoginError").innerHTML = "";

        if (collect_data()) {
            if (check_login()) {
                window.location.href = "Stuff_Welcome.html";
            }
        }
    });
});