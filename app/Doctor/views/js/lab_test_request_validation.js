function validateLabTestForm() {
    let validRequestDate    = validateRequestDate();
    let validTestCategory   = validateTestCategory();
    let validUrgency        = validateUrgency();

    return false;
}

function search_patient()
{
    let validSearchPatient  = validateSearchPatient();
    return false;
}

function validateSearchPatient() {
    let searchPatient = document.getElementById("searchPatient").value;
    let Error = document.getElementById("SearchPatientError");

    let isPatientId   = /^\d{4,10}$/.test(searchPatient);
    let isPhoneNumber = /^01[3-9]\d{8}$/.test(searchPatient);

    if (searchPatient == "") {
        Error.innerHTML = "Enter Patient ID or Phone Number";
        return false;
    }
    else if (!isPatientId && !isPhoneNumber) {
        Error.innerHTML = "Enter a valid Patient ID (numeric) or Phone Number (e.g., 01XXXXXXXXX)";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateRequestDate() {
    let requestDate = document.getElementById("requestDate").value;
    let Error = document.getElementById("RequestDateError");

    if (requestDate == "") {
        Error.innerHTML = "Select request date";
        return false;
    }

    let selected = new Date(requestDate);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selected < today) {
        Error.innerHTML = "Request date cannot be in the past";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateTestCategory() {
    let categories = document.querySelectorAll('input[name="testCategory"]:checked');
    let Error = document.getElementById("TestCategoryError");

    if (categories.length == 0) {
        Error.innerHTML = "Please select at least one test category";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}

function validateUrgency() {
    let urgency = document.getElementById("urgency").value;
    let Error = document.getElementById("UrgencyError");

    if (urgency == "" || urgency == "Select Urgency") {
        Error.innerHTML = "Please select urgency level";
        return false;
    }
    else {
        Error.innerHTML = "";
        return true;
    }
}
