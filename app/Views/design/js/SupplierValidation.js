function collect_supplier_data() {
    let validSupplierID = validationSupplierID();
    let validSupplierName = validationSupplierName();
    let validContactPerson = validationContactPerson();
    let validPhoneNumber = validationPhoneNumber();
    let validEmail = validationEmail();

    return false;
}


function validationSupplierID() {
    let supplierID = document.getElementById("supplierID").value;;
    let Error = document.getElementById("supplierIDError");

    if (supplierID == "") {
        Error.innerHTML = "Enter supplierID";
    }
    else if (supplierID.length < 6) {
        Error.innerHTML = "SupplierID should at least 6 digit number";
    }
    else {
        Error.innerHTML = "";
    }

    return false;
}

function validationSupplierName() {
    let supplierName = document.getElementById("supplierName").value;
    let Error = document.getElementById("supplierNameError");

    if (supplierName == "") {
        Error.innerHTML = "Enter Supplier Name";
    }
    else if (supplierName.length < 3) {
        Error.innerHTML = "Supplier Name Should At Least 3 Characters";
    }
    else {
        Error.innerHTML = "";
    }

    return false;
}

function validationContactPerson() {
    let contactPerson = document.getElementById("contactPerson").value;
    let Error = document.getElementById("contactPersonError");
    if (contactPerson == "") {
        Error.innerHTML = "Enter Contact Person";
    }
    else {
        Error.innerHTML = "";
    }

    return false;
}

function validationPhoneNumber() {
    let phoneNumber = document.getElementById("phoneNumber").value;
    let Error = document.getElementById("phoneNumberError");
    if (phoneNumber == "") {
        Error.innerHTML = "Enter Phone Number";
    }
    else {
        Error.innerHTML = "";
    }

    return false;
}

function validationEmail() {
    let email = document.getElementById("email").value;
    let Error = document.getElementById("emailError");

    if (email == "") {
        Error.innerHTML = "Enter email";
    }
    else {
        Error.innerHTML = "";
    }
    return false;
}

