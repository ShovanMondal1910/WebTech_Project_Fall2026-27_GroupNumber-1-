function collect_customer_login_data()
{
    let validUsername = validateUsername();
    let validPassword = validatePassword();


    return validUsername &&
           validPassword;
}

function validateUsername()
{
    let username = document.getElementById("username").value.trim();
    let Error = document.getElementById("usernameError");

    if (username === "") {
        Error.textContent = "Username is required.";
        return false;
    } else {
        Error.textContent = "";
        return true;
    }
}

function validatePassword()
{
    let password = document.getElementById("password").value.trim();
    let Error = document.getElementById("passwordError");

    if (password === "") {
        Error.textContent = "Password is required.";
        return false;
    } else {
        Error.textContent = "";
        return true;
    }
}