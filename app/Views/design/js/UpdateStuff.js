// Temporary demo data 
let stuffList = [
    { id: "1", name: "Rahim Uddin", dob: "1998-04-12", gender: "Male", phone: "01700000000", department: "Pharmacy", designation: "Pharmacist", shift: ["Morning"], salary: "30000" },
    { id: "2", name: "Karim Hossain", dob: "2000-08-25", gender: "Male", phone: "01800000000", department: "Sales", designation: "Assistant", shift: ["Evening", "Night"], salary: "18000" },
    { id: "3", name: "Nusrat Jahan", dob: "1999-01-30", gender: "Female", phone: "01900000000", department: "Inventory", designation: "Technician", shift: ["Morning", "Afternoon"], salary: "22000" }
];

function validate_search() {
    let search = document.getElementById("search").value.trim();
    let error = document.getElementById("SearchError");

    if (search === "") {
        error.innerHTML = "Please enter Stuff ID or Stuff Name to search";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function find_stuff() {
    let search = document.getElementById("search").value.trim().toLowerCase();

    for (let i = 0; i < stuffList.length; i++) {
        if (stuffList[i].id === search || stuffList[i].name.toLowerCase().indexOf(search) !== -1) {
            return stuffList[i];
        }
    }
    return null;
}

function fill_form(stuff) {
    document.getElementById("stuffId").value = stuff.id;
    document.getElementById("name").value = stuff.name;
    document.getElementById("dob").value = stuff.dob;
    document.getElementById("phone").value = stuff.phone;
    document.getElementById("department").value = stuff.department;
    document.getElementById("designation").value = stuff.designation;
    document.getElementById("salary").value = stuff.salary;

    let genders = document.querySelectorAll('input[name="gender"]');
    for (let i = 0; i < genders.length; i++) {
        genders[i].checked = (genders[i].value === stuff.gender);
    }

    let shifts = document.querySelectorAll('input[name="shift"]');
    for (let i = 0; i < shifts.length; i++) {
        shifts[i].checked = (stuff.shift.indexOf(shifts[i].value) !== -1);
    }
}

function clear_update_messages() {
    let messages = document.querySelectorAll("#updateForm p");
    for (let i = 0; i < messages.length; i++) {
        messages[i].innerHTML = "";
    }
}

function validate_stuffid() {
    let stuffId = document.getElementById("stuffId").value;
    let error = document.getElementById("StuffIdError");

    if (stuffId === "") {
        error.innerHTML = "Please search and select a stuff first";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

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
    let count = 0;

    for (let i = 0; i < shifts.length; i++) {
        if (shifts[i].checked) {
            count++;
        }
    }

    if (count === 0) {
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

function collect_data() {
    let a = validate_stuffid();
    let b = validate_name();
    let c = validate_dob();
    let d = validate_gender();
    let e = validate_phone();
    let f = validate_department();
    let g = validate_designation();
    let h = validate_shift();
    let i = validate_salary();

    return a && b && c && d && e && f && g && h && i;
}

document.addEventListener("DOMContentLoaded", function () {
    let searchForm = document.getElementById("searchForm");
    let updateForm = document.getElementById("updateForm");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validate_search()) {
            let stuff = find_stuff();

            if (stuff === null) {
                document.getElementById("SearchError").innerHTML = "No stuff found";
            }
            else {
                fill_form(stuff);
                clear_update_messages();
            }
        }
    });

    updateForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (collect_data()) {
            alert("Stuff update data is valid");
        }
    });

    updateForm.addEventListener("reset", function () {
        clear_update_messages();
    });
});