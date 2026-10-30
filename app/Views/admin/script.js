function collect_data()
{
    let validName = validateName();
    let validDOB = validateDOB();
    let validGender = validateGender();
    let validPhone = validatePhone();
    let validAddress = validateAddress();
    let validUsername = validateUsername();
    let validEmail = validateEmail();
    let validPassword = validatePassword();

    if (validName && validDOB && validGender && validPhone &&
        validAddress && validUsername && validEmail && validPassword)
    {
        alert("Admin Registration Successful!");
        return false;
    }
    return false;
}

function setError(spanId, message)
{
    let errorSpan = document.getElementById(spanId);
    errorSpan.className = "error";
    errorSpan.textContent = message;
}

function validateName()
{
    let name = document.getElementById("FullName").value.trim();

    if (name === "")
    {
        setError("NameError", "Enter The Name");
        return false;
    }
    else if (name.length < 6)
    {
        setError("NameError", "Name Must Be At Least 6 Characters");
        return false;
    }
    setError("NameError", "");
    console.log("Admin Name:", name);
    return true;
}

function validateDOB()
{
    let dob = document.getElementById("DOB").value;

    if (dob === "")
    {
        setError("DOBError", "Select Your Date of Birth");
        return false;
    }

    let selectedDate = new Date(dob);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate >= today)
    {
        setError("DOBError", "Date of Birth Must Be in the Past");
        return false;
    }
    setError("DOBError", "");
    console.log("Date of Birth:", dob);
    return true;
}

function validateGender()
{
    let genders = document.querySelectorAll('input[name="gender"]');
    let selectedGender = "";

    for (let i = 0; i < genders.length; i++)
    {
        if (genders[i].checked)
        {
            selectedGender = genders[i].value;
            break;
        }
    }

    if (selectedGender === "")
    {
        setError("ErrorGender", "Please Select the Gender");
        return false;
    }
    setError("ErrorGender", "");
    console.log("Gender:", selectedGender);
    return true;
}

function validatePhone()
{
    let phone = document.getElementById("Phone").value.trim();
    let phonePattern = /^01[3-9]\d{8}$/;

    if (phone === "")
    {
        setError("PhoneError", "Enter Your Phone Number");
        return false;
    }
    else if (!phonePattern.test(phone))
    {
        setError("PhoneError", "Enter a Valid Bangladeshi Phone Number");
        return false;
    }
    setError("PhoneError", "");
    console.log("Phone:", phone);
    return true;
}

function validateAddress()
{
    let address = document.getElementById("Address").value.trim();

    if (address === "")
    {
        setError("AddressError", "Enter Your Address");
        return false;
    }
    else if (address.length < 5)
    {
        setError("AddressError", "Address Must Be At Least 5 Characters");
        return false;
    }
    setError("AddressError", "");
    console.log("Address:", address);
    return true;
}

function validateUsername()
{
    let username = document.getElementById("username").value.trim();

    if (username === "")
    {
        setError("UsernameError", "Enter Your Username");
        return false;
    }
    else if (username.length < 4)
    {
        setError("UsernameError", "Username Must Be At Least 4 Characters");
        return false;
    }
    setError("UsernameError", "");
    console.log("Username:", username);
    return true;
}

function validateEmail()
{
    let email = document.getElementById("email").value.trim();

    if (email === "")
    {
        setError("EmailError", "Enter Your Email");
        return false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    {
        setError("EmailError", "Enter a Valid Email Address");
        return false;
    }
    setError("EmailError", "");
    console.log("Email:", email);
    return true;
}

function validatePassword()
{
    let password = document.getElementById("password").value;

    if (password === "")
    {
        setError("PasswordError", "Enter Your Password");
        return false;
    }
    else if (password.length < 8)
    {
        setError("PasswordError", "Password Must Be At Least 8 Characters");
        return false;
    }
    setError("PasswordError", "");
    console.log("Password is valid");
    return true;
}

document.addEventListener("DOMContentLoaded", function ()
{
    let password = document.getElementById("password");
    let togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", function ()
    {
        if (password.type === "password")
        {
            password.type = "text";
            togglePassword.textContent = "🙈";
            togglePassword.title = "Hide password";
            togglePassword.setAttribute("aria-label", "Hide password");
        }
        else
        {
            password.type = "password";
            togglePassword.textContent = "👁";
            togglePassword.title = "Show password";
            togglePassword.setAttribute("aria-label", "Show password");
        }
    });

    document.querySelector("form").addEventListener("reset", function ()
    {
        let ids = ["NameError", "DOBError", "ErrorGender", "PhoneError",
                "AddressError", "UsernameError", "EmailError", "PasswordError"];
        for (let i = 0; i < ids.length; i++)
        {
            setError(ids[i], "");
        }
    });
});