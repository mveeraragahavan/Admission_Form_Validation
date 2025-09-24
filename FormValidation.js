document.getElementById("admissionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll(".error").forEach(el => el.innerText = "");

  let fname = document.getElementById("fname").value.trim();
  let mname = document.getElementById("mname").value.trim();
  let lname = document.getElementById("lname").value.trim();

  if (fname === "" || fname !== fname.toUpperCase()) {
    document.getElementById("fnameError").innerText = "First name must be in CAPITAL letters.";
    valid = false;
  }
  if (mname === "" || mname !== mname.toUpperCase()) {
    document.getElementById("mnameError").innerText = "Middle name must be in CAPITAL letters.";
    valid = false;
  }
  if (lname === "" || lname !== lname.toUpperCase()) {
    document.getElementById("lnameError").innerText = "Last name must be in CAPITAL letters.";
    valid = false;
  }

  let email = document.getElementById("email").value.trim();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email.";
    valid = false;
  }

  let emis = document.getElementById("emis").value.trim();
  if (!/^\d{11}$/.test(emis)) {
    document.getElementById("emisError").innerText = "EMIS must be exactly 11 digits.";
    valid = false;
  }

  let fatherName = document.getElementById("fatherName").value.trim();
  let motherName = document.getElementById("motherName").value.trim();
  let guardianName = document.getElementById("guardianName").value.trim();

  if (fatherName && fatherName !== fatherName.toUpperCase()) {
    document.getElementById("fatherNameError").innerText = "Father's name must be in CAPITAL letters.";
    valid = false;
  }
  if (motherName && motherName !== motherName.toUpperCase()) {
    document.getElementById("motherNameError").innerText = "Mother's name must be in CAPITAL letters.";
    valid = false;
  }
  if (guardianName && guardianName !== guardianName.toUpperCase()) {
    document.getElementById("guardianNameError").innerText = "Guardian's name must be in CAPITAL letters.";
    valid = false;
  }

  let fatherQual = document.getElementById("fatherQual").value.trim();
  let fatherOcc  = document.getElementById("fatherOcc").value.trim();
  let motherQual = document.getElementById("motherQual").value.trim();
  let motherOcc  = document.getElementById("motherOcc").value.trim();
  let guardianQual = document.getElementById("guardianQual").value.trim();
  let guardianOcc  = document.getElementById("guardianOcc").value.trim();

  if (!fatherQual) {
    document.getElementById("fatherQualError").innerText = "Enter father's qualification.";
    valid = false;
  }
  if (!fatherOcc) {
    document.getElementById("fatherOccError").innerText = "Enter father's occupation.";
    valid = false;
  }
  if (!motherQual) {
    document.getElementById("motherQualError").innerText = "Enter mother's qualification.";
    valid = false;
  }
  if (!motherOcc) {
    document.getElementById("motherOccError").innerText = "Enter mother's occupation.";
    valid = false;
  }
  if (!guardianQual) {
    document.getElementById("guardianQualError").innerText = "Enter guardian's qualification.";
    valid = false;
  }
  if (!guardianOcc) {
    document.getElementById("guardianOccError").innerText = "Enter guardian's occupation.";
    valid = false;
  }

  let pincode = document.getElementById("pincode").value.trim();
  if (!/^\d{6}$/.test(pincode)) {
    document.getElementById("pincodeError").innerText = "Pincode must be exactly 6 digits.";
    valid = false;
  }

  let mobile = document.getElementById("mobile").value.trim();
  if (!/^\d{10}$/.test(mobile)) {
    document.getElementById("mobileError").innerText = "Mobile must be exactly 10 digits.";
    valid = false;
  }

  if (valid) {
    alert("Submission done successfully. Thank you for choosing XYZ University!");
    document.getElementById("admissionForm").reset();
  }
});
