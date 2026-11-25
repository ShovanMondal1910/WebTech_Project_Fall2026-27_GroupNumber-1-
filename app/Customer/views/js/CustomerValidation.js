function collect_customer_data()
{
    let validCustomerName = validateCustomerName();
    let validDOB = validateDOB();
    let validGender = validateGender();
    let validCustomerPhone = validateCustomerPhone();
    let validAddress = validateAddress();
    let validFile = validateFile();
    let validCitizenship = validateCitizenship();
    let validUsername = validateUsername();
    let validEmail = validateEmail();
    let validPassword = validatePassword();



    return validCustomerName &&
     validDOB && 
     validGender && 
     validCustomerPhone &&
     validAddress &&
     validFile &&
     validCitizenship &&
     validUsername &&
     validEmail &&
     validPassword;
}

function validateCustomerName()
{

    let cName = document.getElementById("CustomerName").value.trim();
    let Error = document.getElementById("CustomerNameError");

    if(cName==""){
        Error.innerHTML= "Please Enter Your Name";
        return false;
    }
    else if(cName.length < 3){
        Error.innerHTML= "Your Name must be at least 3 characters";
        return false;
    }
    else
    {
        Error.innerHTML= "";
        return true;
    }
    
}

function validateDOB()
{
    let dob = document.getElementById("DOB").value;
    let Error = document.getElementById("DOBError");

    if(dob==""){
        Error.innerHTML= "Please Enter Date of Birth";
        return false;
    }
    else if(new Date(dob) > new Date()){
        Error.innerHTML= "Date of Birth cannot be in the future";
        return false;
    }
    else
    {
        Error.innerHTML= "";
        return true;
    }
    
}

function validateGender()
{
    let genders = document.querySelectorAll('input[name="gender"]');
    let GenderError = document.getElementById("GenderError");
    let selectedGender = "";

    for(let i=0; i<genders.length; i++)
    {
        if(genders[i].checked)
        {
            selectedGender = genders[i].value;
            break;
        }
    }
    if(selectedGender=="")
    {
        GenderError.innerHTML = "Please Select a  Gender";
        return false;
    }
    else
    {
        GenderError.innerHTML = "";
        return true;
    }
}

function validateCustomerPhone()
{
    let phone = document.getElementById("CustomerPhone").value.trim();
    let Error = document.getElementById("CustomerPhoneError");

    if(phone=="")
        {
            Error.innerHTML = "Please Enter Customer Phone";
            return false;
        }
    else if(!/^(?:\+8801|01)[3-9]\d{8}$/.test(phone))
    {
        Error.innerHTML = "Please enter a valid Bangladeshi phone number";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateAddress()
{
    let address = document.getElementById("Address").value.trim();
    let Error = document.getElementById("AddressError");

    if(address=="")
    {
        Error.innerHTML = "Please Enter Address";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateFile() 
{
    let fileInput = document.getElementById("medicaldoc");
    let Error = document.getElementById("fileError");

    if (fileInput.files.length === 0)
 {
        Error.innerHTML = "Please select a file";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
 }

}

function validateCitizenship()
 {
    let citizenship = document.getElementById("Citizen").value;
    let Error = document.getElementById("citizenError");

    if (citizenship === "") 
    {
        Error.innerHTML = "Please select your citizenship";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateUsername()
{
    let username = document.getElementById("username").value.trim();
    let Error = document.getElementById("usernameError");

    if(username=="")
    {
        Error.innerHTML = "Please Enter Username";
        return false;
    }   
    else if(username.length < 5)
    {
        Error.innerHTML = "Username must be at least 5 characters long";
        return false;
    }  
    else
    {
        Error.innerHTML = "";
        return true;
    }     
}

function validateEmail()
{
    let email = document.getElementById("email").value.trim();
    let Error = document.getElementById("emailError");

    if(email=="")
    {
        Error.innerHTML = "Please Enter Email";
        return false;
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    {
        Error.innerHTML = "Please enter a valid email address";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validatePassword()
{
    let password = document.getElementById("password").value.trim();
    let Error = document.getElementById("passwordError");

    if(password=="")
    {
        Error.innerHTML = "Please Enter Password";
        return false;
    }
    else if(password.length < 6 )
    {
        Error.innerHTML = "Password must be at least 6 characters long";
        return false;
    }
    else if(!/[A-Z]/.test(password))
    {
        Error.innerHTML = "Password must contain at least one uppercase letter";
        return false;
    }
    else if(!/[0-9]/.test(password))
    {
        Error.innerHTML = "Password must contain at least one number";
        return false;
    }
    else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password))
    {
        Error.innerHTML = "Password must contain at least one special character";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}
