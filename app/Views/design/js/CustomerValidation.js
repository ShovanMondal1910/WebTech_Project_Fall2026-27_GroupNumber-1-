function collect_customer_data()
{
    let validCustomerName = validateCustomerName();
    let validDOB = validateDOB();
    let validGender = validateGender();
    let validContact = validateContact();
    let validAddress = validateAddress();
    let validvalidFile = validateFile();
    let validCitizenship = validateCitizenship();
    let validUsername = validateUsername();
    let validEmail = validateEmail();
    let validPassword = validatePassword();



    return validCustomerName &&
     validDOB && 
     validGender && 
     validContact && 
     validAddress &&
     validvalidFile &&
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
    let dob = document.getElementById("dob").value;
    let Error = document.getElementById("dobError");}