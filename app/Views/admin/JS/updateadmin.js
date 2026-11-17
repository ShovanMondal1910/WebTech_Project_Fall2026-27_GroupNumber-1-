function collect_data()
{
    let validId=validateId();
    let validPhone=validatePhone();
    let validAddress=validateAddress();

    if(validId && validPhone && validAddress)
    {
        alert("Admin Update Successful");
        return false;
    }
    return false;
}
function setError(spanId,message)
{
    let errorSpan=document.getElementById(spanId);
    errorSpan.className="error";
    errorSpan.textContent=message;
    
}

function validateId()
{
    let adminId=document.getElementById("AdminId").value.trim();
    if(adminId === "")
    {
        setError("IdError","Enter The Admin Id");
        return false;
    }
    else if(!/^\d+$/.test(adminId))
    {
        setError("IdError","Admin Id Must Contain Only Numbers");
        return false;
    }
    setError("IdError","")
    console.log("Admin Id:",adminId);
    return true;
}

function validatePhone()
{
    let phone=document.getElementById("Phone").value.trim();
    let phonePattern=/^01[3-9]\d{8}$/;
    if(phone === "")
    {
        setError("PhoneError","Enter Your Phone Number");
        return false;
    }
    else if(!phonePattern.test(phone))
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
