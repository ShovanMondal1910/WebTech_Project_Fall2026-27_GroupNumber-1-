function collect_customer_data()
{
    let validCustomerName = validateCustomerName();

    return false;
}

function validateCustomerName()
{

    let cName = document.getElementById("CustomerName").value;
    let Error = document.getElementById("CustomerNameError");

    if(cName=""){
        Error.innerHTML= "Pleasen enter your name";
    }
    
    return false;
}