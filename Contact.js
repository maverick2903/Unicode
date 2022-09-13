let submitCheck = -1;

function fnameFunc(nameCheck) {
  let fName = document.getElementById(nameCheck).value;
  let extra_ctr = nameCheckFunc(fName);
  if (fName.length < 2 || extra_ctr != 0) {
    document.getElementById("fname-error").innerHTML = "Invalid name input";
    document.getElementById("fname-error").style.color = "red";
    document.getElementById("fname-border").style.cssText =
      "border:2px solid red;display:inline-block;";
    submitCheck = 1;
  } else {
    document.getElementById("fname-error").innerHTML = "";
    document.getElementById("fname-border").style.cssText = "border:none;";
    submitCheck = 0;
  }
}

function lnameFunc(nameCheck) {
  let lName = document.getElementById(nameCheck).value;
  let extra_ctr = nameCheckFunc(lName);
  if (lName.length < 2 || extra_ctr != 0) {
    document.getElementById("lname-error").innerHTML = "Invalid name input";
    document.getElementById("lname-error").style.color = "red";
    document.getElementById("lname-border").style.cssText =
      "border:2px solid red;display:inline-block;";
    submitCheck = 1;
  } else {
    document.getElementById("lname-error").innerHTML = "";
    document.getElementById("lname-border").style.cssText = "border:none;";
    submitCheck = 0;
  }
}

function nameCheckFunc(nameBoth) {
  let extra_ctr = 0;
  nameBoth = nameBoth.toUpperCase();
  for (let i = 0; i < nameBoth.length; i++) {
    if (!(nameBoth[i] >= "A" && nameBoth[i] <= "Z")) {
      extra_ctr++;
    }
  }
  return extra_ctr;
}

function emailFunc() {
  let email = document.getElementById("email-check").value;
  if (
    email.indexOf("@") > 1 &&
    email.indexOf(".") > 0 &&
    email.indexOf(".") < email.length - 1 &&
    email.indexOf(".") >= email.indexOf("@") + 1
  ) {
    document.getElementById("email-error").innerHTML = "Valid email input";
    document.getElementById("email-error").style.color = "green";
    document.getElementById("email-border").style.cssText =
      "border:2px solid green;display:inline-block;";
    submitCheck = 0;
  } else {
    document.getElementById("email-error").innerHTML = "Invalid email input";
    document.getElementById("email-error").style.color = "red";
    document.getElementById("email-border").style.cssText =
      "border:2px solid red;display:inline-block;";
    submitCheck = 1;
  }
}

function telephoneFunc() {
  let tele = parseInt(document.getElementById("tel-check").value);
  if (
    (tele > 1000000000 && tele < 9999999999) ||
    (tele > 10000000 && tele < 99999999)
  ) {
    console.log(tele);
    document.getElementById("tel-error").innerHTML = "Valid telephone number";
    document.getElementById("tel-error").style.color = "green";
    document.getElementById("tel-border").style.cssText =
      "border:2px solid green;display:inline-block;";
    submitCheck = 0;
  } else {
    document.getElementById("tel-error").innerHTML = "Invalid telephone number";
    document.getElementById("tel-error").style.color = "red";
    document.getElementById("tel-border").style.cssText =
      "border:2px solid red;display:inline-block;";
    submitCheck = 1;
  }
}

function ageFunc() {
  let age = parseInt(document.getElementById("age-check").value);
  if (age > 10 && age < 120) {
    document.getElementById("age-error").innerHTML = "Valid age";
    document.getElementById("age-error").style.color = "green";
    document.getElementById("age-border").style.cssText =
      "border:2px solid green;display:inline-block;";
    submitCheck = 0;
  } else {
    document.getElementById("age-error").innerHTML = "Invalid age";
    document.getElementById("age-error").style.color = "red";
    document.getElementById("age-border").style.cssText =
      "border:2px solid red;display:inline-block;";
    submitCheck = 1;
  }
}

function submitFunc() {
  if (submitCheck != 0) {
    return false;
  } else return true;
}
