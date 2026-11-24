<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab Test Request</title>
    <link rel="stylesheet" href="../views/css/doctor.css">
    <script src="../views/js/lab_test_request_validation.js" defer></script>
</head>

<body>
    <h1>Lab Test Request</h1>

    <form id="labTestForm" action="" method="post" onsubmit="return validateLabTestForm()">

        <fieldset>
            <legend>Search Patient</legend>
            <table>
                <tr>
                    <td><label for="searchPatient">Patient Data :</label></td>
                    <td>
                        <input type="text" name="searchPatient" id="searchPatient" placeholder="Search patient by Patient ID or Phone Number">
                        <p id="SearchPatientError" class="Errors"></p>
                    </td>
                    <td>
                        <input type="button" value="Search" onclick="search_patient()">
                    </td>
                </tr>
            </table>
        </fieldset>
        
        <fieldset>
            <legend>Patient Information</legend>
            <table>
                <tr>
                    <td><label for="patientId">Patient ID :</label></td>
                    <td>
                        <input type="text" name="patientId" id="patientId" placeholder="Patient ID" readonly>
                        <p id="PatientIdError" class="Errors"></p>
                    </td>
                </tr>

                <tr>
                    <td><label for="patientName">Patient Name :</label></td>
                    <td>
                        <input type="text" name="patientName" id="patientName" placeholder="Patient Full Name" readonly>
                        <p id="PatientNameError" class="Errors"></p>
                    </td>
                </tr>

                <tr>
                    <td><label for="patientPhone">Phone :</label></td>
                    <td>
                        <input type="text" name="patientPhone" id="patientPhone" placeholder="Contact Number" readonly>
                        <p id="PatientPhoneError" class="Errors"></p>
                    </td>
                </tr>
            </table>
        </fieldset>
        <br>

        <fieldset>
            <legend>Test Details</legend>
            <table>
                <tr>
                    <td><label for="requestDate">Request Date :</label></td>
                    <td>
                        <input type="date" name="requestDate" id="requestDate">
                        <p id="RequestDateError" class="Errors"></p>
                    </td>
                </tr>

                <tr>
                    <td><label>Test Category :</label></td>
                    <td>
                        <input type="checkbox" name="testCategory" id="cat_blood"       value="Blood Test"    onchange="updateTestList()"> Blood Test
                        <input type="checkbox" name="testCategory" id="cat_urine"       value="Urine Test"    onchange="updateTestList()"> Urine Test
                        <input type="checkbox" name="testCategory" id="cat_stool"       value="Stool Test"    onchange="updateTestList()"> Stool Test
                        <input type="checkbox" name="testCategory" id="cat_imaging"     value="Imaging"       onchange="updateTestList()"> Imaging
                        <input type="checkbox" name="testCategory" id="cat_ecg"         value="ECG"           onchange="updateTestList()"> ECG / Cardiac
                        <input type="checkbox" name="testCategory" id="cat_micro"       value="Microbiology"  onchange="updateTestList()"> Microbiology
                        <input type="checkbox" name="testCategory" id="cat_hormone"     value="Hormone Test"  onchange="updateTestList()"> Hormone Test
                        <p id="TestCategoryError" class="Errors"></p>
                    </td>
                </tr>

                <tr id="testNameRow" style="display:none;">
                    <td><label>Test Name :</label></td>
                    <td>
                        <div id="testNameContainer"></div>
                        <p id="TestNameError" class="Errors"></p>
                    </td>
                </tr>

                <tr>
                    <td><label for="urgency">Urgency :</label></td>
                    <td>
                        <select name="urgency" id="urgency">
                            <option value="">Select Urgency</option>
                            <option value="Routine">Routine</option>
                            <option value="Urgent">Urgent</option>
                            <option value="Emergency">Emergency / STAT</option>
                        </select>
                        <p id="UrgencyError" class="Errors"></p>
                    </td>
                </tr>

                <tr>
                    <td><label for="clinicalNotes">Clinical Notes :</label></td>
                    <td>
                        <textarea name="clinicalNotes" id="clinicalNotes" rows="4"
                            placeholder="Enter relevant symptoms, diagnosis, or clinical indication for this test"></textarea>
                        <p id="ClinicalNotesError" class="Errors"></p>
                    </td>
                </tr>

                <tr>
                    <td><label for="specialInstructions">Special Instructions :</label></td>
                    <td>
                        <textarea name="specialInstructions" id="specialInstructions" rows="3"
                            placeholder="e.g., Fasting required, collect sample in the morning (optional)"></textarea>
                    </td>
                </tr>
            </table>
        </fieldset>
        <br>

        <div class="button-group">
            <input type="submit" id="submit" value="Submit Request">
            <input type="reset" id="reset" value="Reset">
        </div>

    </form>

    <div style="text-align: center; margin-top: 16px;">
        <span><a href="doctor_dashboard.php">Back to Dashboard</a></span>
    </div>

</body>

</html>
