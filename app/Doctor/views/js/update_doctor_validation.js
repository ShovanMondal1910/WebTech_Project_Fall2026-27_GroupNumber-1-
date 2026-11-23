
//update doctor 
function search_doctor() {
    let isValidDoctorID = validationDoctorID();

    return false;
}

function validationDoctorID() {
    let doctorID = document.getElementById("doctorID").value.trim();
    let Error = document.getElementById("DoctorIDError");

    if (doctorID == "") {
        Error.innerHTML = "Enter Doctor ID";
        return false;
    }
    else if (!/^\d+$/.test(doctorID)) {
        Error.innerHTML = "Doctor ID must contain only numbers";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}