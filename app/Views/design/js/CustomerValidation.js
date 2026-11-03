function collect_customer_data()
{
    let validCustomerName = validateCustomerName();
    let validDOB = validateDOB();
    let validGender = validateGender();
    let validCustomerPhone = validateCustomerPhone();
    // let validAddress = validateAddress();
    // let validFile = validateFile();
    // let validCitizenship = validateCitizenship();
    // let validUsername = validateUsername();
    // let validEmail = validateEmail();
    // let validPassword = validatePassword();



    return validCustomerName && validDOB && validGender && validCustomerPhone;
}

function validateCustomerName()
{

    let cName = document.getElementById("CustomerName").value.trim();
    let Error = document.getElementById("CustomerNameError");

    if(cName==""){
        Error.innerHTML= "Please Enter Customer Name";
        return false;
    }
    else if(cName.length < 3){
        Error.innerHTML= "Customer Name must be at least 3 characters";
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