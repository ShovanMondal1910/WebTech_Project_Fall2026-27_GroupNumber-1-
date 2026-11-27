
function goToRegistration(userType) {
    var routes = {
        'admin': 'admin/adminreg.html',
        'doctor': 'doctor/AddDoctor.html',
        'stuff': 'Stuff/Page/Stuff_Registration.html',
        'customer': 'customer/AddCustomer.html',
        'nurse': 'Stuff/Page/Stuff_Registration.html',
        'patient': 'customer/AddCustomer.html'
    };

    var destination = routes[userType];
    if (destination) {
        window.location.href = destination;
    } else {
        console.error('Unknown user type:', userType);
    }
}
