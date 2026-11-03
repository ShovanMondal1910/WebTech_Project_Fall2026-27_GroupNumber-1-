function collect_customer_data()
{
    let validCustomerName = validateCustomerName();

    return validCustomerName;
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