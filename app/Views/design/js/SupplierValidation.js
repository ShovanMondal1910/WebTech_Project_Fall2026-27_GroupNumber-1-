function collect_supplier_data()
{
    let validSupplierID =validationSupplierID();

    return false;
}


function validationSupplierID()
{
    let supplierID = document.getElementById("supplierID").value;;
    let Error = document.getElementById("supplierIDError");

    if(supplierID == "")
    {
        Error.innerHTML = "Enter supplierID";
    }
    else if(supplierID.length<6)
    {
        Error.innerHTML = "SupplierID should at least 6 digit number";
    }
    else
    {
        Error.innerHTML = "";
    }

    return false;
}