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
    let validUsername = validateUsername();
    let validPassword = validatePassword();
    let validConfirmPassword = validateConfirmPassword();

    return false;
}

function validateDoctorForm() {
    return collect_doctor_data();
}

function validateDoctorName() {
    let name = document.getElementById("doctorName").value;
    let Error = document.getElementById("DoctorNameError");

    if (name == "") {
        Error.innerHTML = "Enter doctor name";
    }
    else if (name.length < 3) {
        Error.innerHTML = "Doctor name must be at least 3 characters";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

function validateDOB() {
    let dob = document.getElementById("dob").value;
    let Error = document.getElementById("DobError");

    if (dob == "") {
        Error.innerHTML = "Select date of birth";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
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
    }
    else if (phone.length < 11) {
        Error.innerHTML = "Phone number must be at least 11 digits";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let Error = document.getElementById("EmailError");

    if (email == "") {
        Error.innerHTML = "Enter email address";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

function validateAddress() {
    let address = document.getElementById("address").value;
    let Error = document.getElementById("AddressError");

    if (address == "") {
        Error.innerHTML = "Enter address";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

function validateLicense() {
    let license = document.getElementById("licenseNo").value;
    let Error = document.getElementById("LicenseError");

    if (license == "") {
        Error.innerHTML = "Enter license number";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

function validateSpecialization() {
    let specialization = document.getElementById("specialization").value;
    let Error = document.getElementById("SpecializationError");

    if (specialization == "" || specialization == "Select Specialization") {
        Error.innerHTML = "Please select specialization";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

function validateQualification() {
    let qualification = document.getElementById("qualification").value;
    let Error = document.getElementById("QualificationError");

    if (qualification == "") {
        Error.innerHTML = "Enter qualifications";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

function validateDesignation() {
    let designation = document.getElementById("designation").value;
    let Error = document.getElementById("DesignationError");

    if (designation == "" || designation == "Select Designation") {
        Error.innerHTML = "Please select designation";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
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
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

function validateFee() {
    let fee = document.getElementById("consultationFee").value;
    let Error = document.getElementById("FeeError");

    if (fee == "") {
        Error.innerHTML = "Enter consultation fee";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

function validateUsername() {
    let username = document.getElementById("username").value;
    let Error = document.getElementById("UsernameError");

    if (username == "") {
        Error.innerHTML = "Enter username";
    }
    else if (username.length < 4) {
        Error.innerHTML = "Username must be at least 4 characters";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let Error = document.getElementById("PasswordError");

    if (password == "") {
        Error.innerHTML = "Enter password";
    }
    else if (password.length < 6) {
        Error.innerHTML = "Password must be at least 6 characters";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let Error = document.getElementById("ConfirmPasswordError");

    if (confirmPassword == "") {
        Error.innerHTML = "Confirm your password";
    }
    else if (password != confirmPassword) {
        Error.innerHTML = "Passwords do not match";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}
