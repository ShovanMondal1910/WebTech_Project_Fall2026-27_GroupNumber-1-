let correctUsername = "admin";
let correctPassword = "admin1234";

function valid_username()
{
    let username = document.getElementById("username").value.trim();
    let error = document.getElementById("UsernameError");

    if (username === "")
    {
        error.innerHTML = "User Name Is Required";
        return false;
    }
    else if (username.length < 4)
    {
        error.innerHTML = "User Name must be at least 4 char";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function valid_pass()
{
    let password = document.getElementById("password").value;
    let error = document.getElementById("PasswordError");

    if (password === "")
    {
        error.innerHTML = "Password Is Required";
        return false;
    }
    else if (password.length < 6)
    {
        error.innerHTML = "Password Must Be at Least 6 Characters";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function collect_data()
{
    let a = valid_username();
    let b = valid_pass();
    return a && b;
}

function check_login()
{
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let error = document.getElementById("LoginError");

    if (username === correctUsername && password === correctPassword)
    {
        error.innerHTML = "";
        return true;
    }
    else
    {
        error.innerHTML = "Invalid admin user name or password";
        return false;
    }
}

function toggle_password()
{
    let password = document.getElementById("password");
    let button = document.getElementById("togglePassword");

    if (password.type === "password")
    {
        password.type = "text";
        button.setAttribute("aria-label", "Hide password");
        button.setAttribute("title", "Hide password");
    }
    else
    {
        password.type = "password";
        button.setAttribute("aria-label", "Show password");
        button.setAttribute("title", "Show password");
    }
}

document.addEventListener("DOMContentLoaded", function ()
{
    let form = document.getElementById("loginForm");

    document.getElementById("togglePassword").addEventListener("click", toggle_password);

    form.addEventListener("submit", function (event)
    {
        event.preventDefault();

        document.getElementById("LoginError").innerHTML = "";

        if (collect_data())
        {
            if (check_login())
            {
                window.location.href = "admin.html";
            }
        }
    });
});