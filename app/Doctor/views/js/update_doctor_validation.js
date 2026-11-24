function collect_doctor_data() {
    let validName = validateDoctorName();
    let validDOB = validateDOB();
    let validGender = validateGender();
    let validPhone = validatePhone();
    let validEmail = validateEmail();
    let validAddress = validateAddress();
    let validLicense = validateLicense();
    let validSpecialization = validateSpecialization();
    let validQualification = validateQualification();
    let validDesignation = validateDesignation();
    let validDays = validateVisitingDays();
    let validHours = validateVisitingHours();
    let validFee = validateFee();

    return validName && validDOB && validGender && validPhone && validEmail &&
           validAddress && validLicense && validSpecialization && validQualification &&
           validDesignation && validDays && validHours && validFee;
}

function validateDoctorForm() {
    return collect_doctor_data();
}

function validateDoctorName() {
    let name = document.getElementById("doctorName").value;
    let Error = document.getElementById("DoctorNameError");

    if (name == "") {
        Error.innerHTML = "Enter doctor name";
        return false;
    }
    else if (name.length < 3) {
        Error.innerHTML = "Doctor name must be at least 3 characters";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateDOB() { 
    let dob = document.getElementById("dob").value; 
    let Error = document.getElementById("DobError"); 

    if (dob === "") { 
        Error.innerHTML = "Select date of birth"; 
        return false; 
    } 
    let dobDate = new Date(dob);
    let today = new Date();
    
    let age = today.getFullYear() - dobDate.getFullYear();
    let monthDiff = today.getMonth() - dobDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    if (age <= 25) { 
        Error.innerHTML = "Age must be greater than 25 years old."; 
        return false;
    } else { 
        Error.innerHTML = "";
        return true;
    } 
}


function validateGender() {
    let genders = document.querySelectorAll('input[name="gender"]');
    let Error = document.getElementById("GenderError");
    let selectGender = "";

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            selectGender = genders[i].value;
            break;
        }
    }
    if (selectGender == "") {
        Error.innerHTML = "Please Select Gender";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    let Error = document.getElementById("PhoneError");

    if (phone == "") {
        Error.innerHTML = "Enter phone number";
        return false;
    }
    else if (!phone.startsWith("01")) {
        Error.innerHTML = "Phone number must start with 01";
        return false;
    }
    else if (phone.length < 11) {
        Error.innerHTML = "Phone number must be at least 11 digits";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let Error = document.getElementById("EmailError");

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email == "") {
        Error.innerHTML = "Enter email address";
        return false;
    }
   
    else if (!emailPattern.test(email)) {
        Error.innerHTML = "Enter a valid email address (e.g., name@example.com)";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateAddress() {
    let address = document.getElementById("address").value;
    let Error = document.getElementById("AddressError");

    if (address == "") {
        Error.innerHTML = "Enter address";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateLicense() {
    let license = document.getElementById("licenseNo").value;
    let Error = document.getElementById("LicenseError");

    if (license == "") {
        Error.innerHTML = "Enter license number";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateSpecialization() {
    let specialization = document.getElementById("specialization").value;
    let Error = document.getElementById("SpecializationError");

    if (specialization == "" || specialization == "Select Specialization") {
        Error.innerHTML = "Please select specialization";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateQualification() {
    let qualification = document.getElementById("qualification").value;
    let Error = document.getElementById("QualificationError");

    if (qualification == "") {
        Error.innerHTML = "Enter qualifications";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateDesignation() {
    let designation = document.getElementById("designation").value;
    let Error = document.getElementById("DesignationError");

    if (designation == "" || designation == "Select Designation") {
        Error.innerHTML = "Please select designation";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateVisitingDays() {
    let days = document.querySelectorAll('input[name="visitingDays"]');
    let Error = document.getElementById("VisitingDaysError");
    let hasDay = false;

    for (let i = 0; i < days.length; i++) {
        if (days[i].checked) {
            hasDay = true;
            break;
        }
    }

    if (!hasDay) {
        Error.innerHTML = "Please select visiting days";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateVisitingHours() {
    let hours = document.getElementById("visitingHours").value;
    let Error = document.getElementById("VisitingHoursError");

    if (hours == "") {
        Error.innerHTML = "Enter visiting hours";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateFee() {
    let fee = document.getElementById("consultationFee").value;
    let Error = document.getElementById("FeeError");

    if (fee == "") {
        Error.innerHTML = "Enter consultation fee";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

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