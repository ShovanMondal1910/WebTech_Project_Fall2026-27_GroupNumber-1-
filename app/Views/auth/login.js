function validateLogin() {
    var email = document.getElementById("email").value.trim();
    var pass = document.getElementById("password").value;

    if (email === "shovan@gmail.com" && pass === "doctor123") {
        window.location.href = "../doctor/Doctorpage.html";
    } 
    else {
        alert("Invalid email or password!");
    }
    return false;
}
