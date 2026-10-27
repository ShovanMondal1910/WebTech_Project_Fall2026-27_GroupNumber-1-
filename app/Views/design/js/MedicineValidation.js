function collect_medicine_data()
{
    let validMedicineID = validateMedicineID();
    let validMedicineName = validateMedicineName();
    let validBrandName = validateBrandName();
    let validGenericName = validateGenericName();
    let validStrength = validateStrength();
    let validBarcode = validateBarcode();
    let validSellingPrice = validateSellingPrice();
    let validInitialStock = validateInitialStock();

   return false;
}

function validateMedicineID()
{
    let medicineID = document.getElementById('medicineID').value;
    let Error = document.getElementById("medicineIdError");

    if(medicineID === "")
    {
        Error.innerHTML = "Enter the medicineID";
    }
    else if(medicineID.length < 8)
    {
        Error.innerHTML = "MedicineID must be at least 8 character ";
    }
    else
    {
        Error.innerHTML = "";
    }    
    return false;
}

function validateMedicineName()
{
    let medicineName = document.getElementById("medicineName").value;
    let Error = document.getElementById("medicineNameError");

    if(medicineName == "" )
    {
        Error.innerHTML = "Enter medicine name";
    }
    else if(medicineName.length<5)
    {
        Error.innerHTML = "Medicine name should be at least 5 charcter";
    }
    else{
        Error.innerHTML = "";
    }
    return false;
}
function validateBrandName()
{
    let brandName = document.getElementById("brandName").value;
    let Error = document.getElementById("brandNameError");

    if(brandName == "" )
    {
        Error.innerHTML = "Enter brand name";
    }
    else{
        Error.innerHTML = "";
    }
    return false;
}
function validateGenericName()
{
    let genericName = document.getElementById("genericName").value;
    let Error = document.getElementById("genericNameError");

    if(genericName == "" )
    {
        Error.innerHTML = "Enter generic name";
    }
    else{
        Error.innerHTML = "";
    }
    return false;
}

function validateStrength()
{
    let strength = document.getElementById("strength").value;
    let Error = document.getElementById("strengthError");

    if(strength == "" )
    {
        Error.innerHTML = "Enter strength";
    }
    else{
        Error.innerHTML = "";
    }
    return false;
}

function validateBarcode()
{
    let barcode = document.getElementById("barcode").value;
    let Error = document.getElementById("barcodeError");

    if(barcode == "" )
    {
        Error.innerHTML = "Enter barcode";
    }
    else{
        Error.innerHTML = "";
    }
    return false;
}

function validateSellingPrice()
{
    let sellingPrice = document.getElementById("sellingPrice").value;
    let Error = document.getElementById("sellingPriceError");

    if(sellingPrice == "" )
    {
        Error.innerHTML = "Enter selling price";
    }
    else{
        Error.innerHTML = "";
    }
    return false;
}

function validateInitialStock()
{
    let initialStock = document.getElementById("initialStock").value;
    let Error = document.getElementById("initialStockError");

    if(initialStock == "" )
    {
        Error.innerHTML = "Enter initial stock";
    }
    else{
        Error.innerHTML = "";
    }
    return false;
}