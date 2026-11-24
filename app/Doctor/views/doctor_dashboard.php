<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doctor Operations</title>
    <link rel="stylesheet" href="../views/css/doctor.css">
</head>

<body>
    <img src="../views/assets/logo.png" id="logo" alt="Doctor Logo">

    <h1>Doctor Management</h1>

    <fieldset>
        <legend>Doctor Operations</legend>
        <div class="action-container">

            <div class="action-card">
                <h3>Add Doctor</h3>
                <p>Register a new doctor with specialization, qualification, visiting hours, and fee details.</p>
                <a href="add_doctor.php">
                    <button type="button" class="action-btn">Add Doctor</button>
                </a>
            </div>

            <div class="action-card">
                <h3>Update Doctor</h3>
                <p>Search, view, and modify profile details, contact information, chamber, or schedule for doctors.</p>
                <a href="update_doctor.php">
                    <button type="button" class="action-btn">Update Doctor</button>
                </a>
            </div>

            <div class="action-card">
                <h3>View Appointments</h3>
                <p>Browse upcoming and past appointments, check patient details, and mark visits as completed or cancelled.</p>
                <a href="view_appointments.php">
                    <button type="button" class="action-btn">View Appointments</button>
                </a>
            </div>

            <div class="action-card">
                <h3>Write Prescription</h3>
                <p>Create and issue prescriptions for patients with medicine name, dosage, duration, and instructions.</p>
                <a href="write_prescription.php">
                    <button type="button" class="action-btn">Write Prescription</button>
                </a>
            </div>

            <div class="action-card">
                <h3>Patient List</h3>
                <p>View all assigned patients with their basic information, contact details, and current status.</p>
                <a href="patient_list.php">
                    <button type="button" class="action-btn">Patient List</button>
                </a>
            </div>

            <div class="action-card">
                <h3>Patient Medical History</h3>
                <p>Search a patient and review their past diagnoses, prescriptions, lab results, and visit records.</p>
                <a href="patient_history.php">
                    <button type="button" class="action-btn">View History</button>
                </a>
            </div>

            <div class="action-card">
                <h3>Lab Test Request</h3>
                <p>Request blood tests, urine tests, or other diagnostic lab work for a patient.</p>
                <a href="lab_test_request.php">
                    <button type="button" class="action-btn">Request Test</button>
                </a>
            </div>

            <div class="action-card">
                <h3>View Lab Results</h3>
                <p>Check the results of previously requested lab tests and diagnostics for your patients.</p>
                <a href="view_lab_results.php">
                    <button type="button" class="action-btn">View Results</button>
                </a>
            </div>

            <div class="action-card">
                <h3>Doctor Profile</h3>
                <p>View and update your contact details, chamber address, visiting hours, and consultation fee.</p>
                <a href="doctor_profile.php">
                    <button type="button" class="action-btn">My Profile</button>
                </a>
            </div>

        </div>
    </fieldset>

    <div style="text-align: center; margin-top: 20px;">
        <a href="login.php">Logout</a>
    </div>
</body>

</html>
