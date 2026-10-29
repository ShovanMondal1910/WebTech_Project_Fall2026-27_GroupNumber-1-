function validate_name() {
    let name = document.getElementById("name").value.trim();
    let error = document.getElementById("NameError");
    let pattern = /^[A-Za-z. ]+$/;

    if (name === "") {
        error.innerHTML = "Stuff name is required";
        return false;
    }
    else if (name.length < 3) {
        error.innerHTML = "Stuff name must be at least 3 characters";
        return false;
    }
    else if (!pattern.test(name)) {
        error.innerHTML = "Stuff name can contain only letters, space and dot";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_dob() {
    let dob = document.getElementById("dob").value;
    let error = document.getElementById("DobError");

    if (dob === "") {
        error.innerHTML = "Date of birth is required";
        return false;
    }

    let today = new Date();
    let birth = new Date(dob);

    if (birth > today) {
        error.innerHTML = "Date of birth cannot be in the future";
        return false;
    }

    let age = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    if (age < 18) {
        error.innerHTML = "Stuff must be at least 18 years old";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_gender() {
    let genders = document.querySelectorAll('input[name="gender"]');
    let error = document.getElementById("GenderError");
    let selected = "";

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            selected = genders[i].value;
        }
    }

    if (selected === "") {
        error.innerHTML = "Please select a gender";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_phone() {
    let phone = document.getElementById("phone").value.trim();
    let error = document.getElementById("PhoneError");
    let pattern = /^01[3-9][0-9]{8}$/;

    if (phone === "") {
        error.innerHTML = "Phone number is required";
        return false;
    }
    else if (!pattern.test(phone)) {
        error.innerHTML = "Phone must be 11 digits and start with 01 (Example: 01712345678)";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_department() {
    let department = document.getElementById("department").value.trim();
    let error = document.getElementById("DeptError");

    if (department === "") {
        error.innerHTML = "Department is required";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_designation() {
    let designation = document.getElementById("designation").value;
    let error = document.getElementById("DesignationError");

    if (designation === "blank") {
        error.innerHTML = "Please select a designation";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_shift() {
    let shifts = document.querySelectorAll('input[name="shift"]');
    let error = document.getElementById("ShiftError");
    let selected = [];

    for (let i = 0; i < shifts.length; i++) {
        if (shifts[i].checked) {
            selected.push(shifts[i].value);
        }
    }

    if (selected.length === 0) {
        error.innerHTML = "Please select at least one shift";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_salary() {
    let salaryText = document.getElementById("salary").value.trim();
    let error = document.getElementById("SalaryError");
    let salary = Number(salaryText);

    if (salaryText === "") {
        error.innerHTML = "Salary is required";
        return false;
    }
    else if (isNaN(salary) || salary <= 0) {
        error.innerHTML = "Salary must be a number greater than 0";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_username() {
    let username = document.getElementById("username").value.trim();
    let error = document.getElementById("UsernameError");
    let pattern = /^[A-Za-z0-9_]+$/;

    if (username === "") {
        error.innerHTML = "User name is required";
        return false;
    }
    else if (username.length < 4) {
        error.innerHTML = "User name must be at least 4 characters";
        return false;
    }
    else if (!pattern.test(username)) {
        error.innerHTML = "User name can contain only letters, numbers and underscore";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_email() {
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("EmailError");
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        error.innerHTML = "Email is required";
        return false;
    }
    else if (!pattern.test(email)) {
        error.innerHTML = "Enter a valid email (Example: name@gmail.com)";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_password() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("PasswordError");

    if (password === "") {
        error.innerHTML = "Password is required";
        return false;
    }
    else if (password.length < 6) {
        error.innerHTML = "Password must be at least 6 characters";
        return false;
    }
    else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
        error.innerHTML = "Password must contain both letters and numbers";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function collect_data() {
    let a = validate_name();
    let b = validate_dob();
    let c = validate_gender();
    let d = validate_phone();
    let e = validate_department();
    let f = validate_designation();
    let g = validate_shift();
    let h = validate_salary();
    let i = validate_username();
    let j = validate_email();
    let k = validate_password();

    return a && b && c && d && e && f && g && h && i && j && k;
}

function clear_messages() {
    let messages = document.querySelectorAll("p");
    for (let i = 0; i < messages.length; i++) {
        messages[i].innerHTML = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("stuffForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (collect_data()) {
            alert("Stuff registration data is valid");
        }
    });

    form.addEventListener("reset", function () {
        clear_messages();
    });
});