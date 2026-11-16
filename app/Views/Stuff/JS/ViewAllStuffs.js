function validate_search() {
    let search = document.getElementById("search").value.trim();
    let error = document.getElementById("SearchError");

    if (search === "") {
        error.innerHTML = "Please enter Stuff ID, Employee Code or Name to search";
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function show_all_rows() {
    let rows = document.querySelectorAll("#stuffTable tbody tr");

    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = "";
    }
}

function search_stuff() {
    let search = document.getElementById("search").value.trim().toLowerCase();
    let error = document.getElementById("SearchError");
    let rows = document.querySelectorAll("#stuffTable tbody tr");
    let found = 0;

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].querySelectorAll("td");
        let stuffId = cells[0].textContent.toLowerCase();
        let employeeCode = cells[1].textContent.toLowerCase();
        let name = cells[2].textContent.toLowerCase();

        if (stuffId.indexOf(search) !== -1 || employeeCode.indexOf(search) !== -1 || name.indexOf(search) !== -1) {
            rows[i].style.display = "";
            found++;
        }
        else {
            rows[i].style.display = "none";
        }
    }

    if (found === 0) {
        error.innerHTML = "No stuff found";
    }
    else {
        error.innerHTML = "";
    }
}

function confirm_delete(event) {
    event.preventDefault();

    let sure = confirm("Are you sure you want to delete this stuff?");

    if (sure) {
        // later (with PHP) this will go to the delete page, for now the row is removed from the table
        let row = event.target.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("searchForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validate_search()) {
            search_stuff();
        }
        else {
            show_all_rows();
        }
    });

    let deleteLinks = document.querySelectorAll(".deleteLink");
    for (let i = 0; i < deleteLinks.length; i++) {
        deleteLinks[i].addEventListener("click", confirm_delete);
    }
});