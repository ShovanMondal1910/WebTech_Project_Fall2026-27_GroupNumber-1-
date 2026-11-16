// Temporary demo data (later this will come from the database with PHP)
let medicineList = [
    { id: "1", name: "Napa 500mg", price: 2, stock: 200 },
    { id: "2", name: "Seclo 20mg", price: 7, stock: 120 },
    { id: "3", name: "Fexo 120mg", price: 8, stock: 90 },
    { id: "4", name: "Ace Plus", price: 3, stock: 150 },
    { id: "5", name: "Maxpro 20mg", price: 8, stock: 60 },
    { id: "6", name: "Ciprocin 500mg", price: 15, stock: 40 }
];

// It becomes true only after Count Total is done successfully
let totalCounted = false;

function find_medicine(id) {
    for (let i = 0; i < medicineList.length; i++) {
        if (medicineList[i].id === id) {
            return medicineList[i];
        }
    }
    return null;
}

// Put all demo medicines in the select box
function fill_medicine_list() {
    let select = document.getElementById("medicine");

    for (let i = 0; i < medicineList.length; i++) {
        let option = document.createElement("option");
        option.value = medicineList[i].id;
        option.text = medicineList[i].name;
        select.appendChild(option);
    }
}

// Show price and stock of the selected medicine
function show_medicine_details() {
    let medicine = find_medicine(document.getElementById("medicine").value);

    if (medicine === null) {
        document.getElementById("price").value = "";
        document.getElementById("stock").value = "";
    }
    else {
        document.getElementById("price").value = medicine.price;
        document.getElementById("stock").value = medicine.stock;
    }
}

function clear_total() {
    document.getElementById("total").value = "";
    totalCounted = false;
}

function clear_bill_message() {
    let message = document.getElementById("BillMessage");
    message.innerHTML = "";
    message.className = "";
}

function clear_messages() {
    let messages = document.querySelectorAll("p");
    for (let i = 0; i < messages.length; i++) {
        messages[i].innerHTML = "";
        messages[i].className = "";
    }
}

function validate_medicine() {
    let medicine = document.getElementById("medicine").value;
    let error = document.getElementById("MedicineError");

    if (medicine === "blank") {
        error.innerHTML = "Please select a medicine";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function validate_quantity() {
    let quantityText = document.getElementById("quantity").value.trim();
    let error = document.getElementById("QuantityError");
    let quantity = Number(quantityText);
    let medicine = find_medicine(document.getElementById("medicine").value);

    if (quantityText === "") {
        error.innerHTML = "Quantity is required";
        return false;
    }
    else if (isNaN(quantity) || quantity <= 0 || quantity % 1 !== 0) {
        error.innerHTML = "Quantity must be a whole number greater than 0";
        return false;
    }
    else if (medicine !== null && quantity > medicine.stock) {
        error.innerHTML = "Not enough stock (available: " + medicine.stock + ")";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

// Count Total button: price x quantity
function count_total() {
    clear_bill_message();

    let a = validate_medicine();
    let b = validate_quantity();

    if (a && b) {
        let medicine = find_medicine(document.getElementById("medicine").value);
        let quantity = Number(document.getElementById("quantity").value);

        document.getElementById("total").value = medicine.price * quantity;
        totalCounted = true;
    }
    else {
        clear_total();
    }
}

// Print Bill button: medicine must be selected and total must be counted
function print_bill() {
    let message = document.getElementById("BillMessage");
    let medicine = find_medicine(document.getElementById("medicine").value);

    if (medicine === null || totalCounted === false) {
        message.className = "";
        message.innerHTML = "Select medicine and count total for print bill";
        return false;
    }
    else {
        // demo sell: reduce the stock of the demo data
        let quantity = Number(document.getElementById("quantity").value);
        medicine.stock = medicine.stock - quantity;

        // get the form ready for the next sell
        document.getElementById("medicine").value = "blank";
        document.getElementById("quantity").value = "";
        show_medicine_details();
        clear_total();
        document.getElementById("MedicineError").innerHTML = "";
        document.getElementById("QuantityError").innerHTML = "";

        message.className = "success";
        message.innerHTML = "Your bill printed";
        return true;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("sellForm");

    fill_medicine_list();

    // When medicine is changed, old total is not valid any more
    document.getElementById("medicine").addEventListener("change", function () {
        show_medicine_details();
        clear_total();
        clear_bill_message();
        document.getElementById("MedicineError").innerHTML = "";
        document.getElementById("QuantityError").innerHTML = "";
    });

    // When quantity is changed, old total is not valid any more
    document.getElementById("quantity").addEventListener("input", function () {
        clear_total();
        clear_bill_message();
    });

    document.getElementById("countTotal").addEventListener("click", count_total);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        print_bill();
    });

    form.addEventListener("reset", function () {
        clear_messages();
        totalCounted = false;
    });
});