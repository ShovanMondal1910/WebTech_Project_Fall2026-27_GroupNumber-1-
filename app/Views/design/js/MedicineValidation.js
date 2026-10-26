function collect_medicine_data()
{
    let validMedicineID = validateMedicineID();
    let validMedicineName = validateMedicineName();

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
}