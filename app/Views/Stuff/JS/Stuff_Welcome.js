function show_greeting() {
    let hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning";
    }
    else if (hour < 18) {
        greeting = "Good Afternoon";
    }
    else {
        greeting = "Good Evening";
    }

    document.getElementById("greeting").innerHTML = greeting + "! What would you like to do?";
}

function confirm_logout() {
    let sure = confirm("Are you sure you want to logout?");

    if (sure) {
        window.location.href = "Stuff_Login.html";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    show_greeting();

    document.getElementById("logout").addEventListener("click", confirm_logout);
});