let submitCheck_fn = 1;
let submitCheck_ln = 1;
let submitCheck_e = 1;
let submitCheck_n = 1;
let submitCheck_a = 1;

function fnameFunc(nameCheck) {
  let fName = document.getElementById(nameCheck).value;
  let extra_ctr = nameCheckFunc(fName);
  if (fName.length < 2 || extra_ctr != 0) {
    document.getElementById("fname-error").innerHTML = "Invalid name input";
    document.getElementById("fname-error").style.cssText =
      "color:rgb(176, 11, 11);font-weight:700;font-size:17px";
    document.getElementById("fname-border").style.cssText =
      "border:2px solid rgb(176, 11, 11);display:inline-block;border-radius:12px;";
    submitCheck_fn = 1;
  } else {
    document.getElementById("fname-error").innerHTML = "";
    document.getElementById("fname-border").style.cssText = "border:none;";
    submitCheck_fn = 0;
  }
}

function lnameFunc(nameCheck) {
  let lName = document.getElementById(nameCheck).value;
  let extra_ctr = nameCheckFunc(lName);
  if (lName.length < 2 || extra_ctr != 0) {
    document.getElementById("lname-error").innerHTML = "Invalid name input";
    document.getElementById("lname-error").style.cssText =
      "color:rgb(176, 11, 11);font-weight:700;font-size:17px";
    document.getElementById("lname-border").style.cssText =
      "border:2px solid rgb(176, 11, 11);display:inline-block;border-radius:12px;";
    submitCheck_ln = 1;
  } else {
    document.getElementById("lname-error").innerHTML = "";
    document.getElementById("lname-border").style.cssText = "border:none;";
    submitCheck_ln = 0;
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
    document.getElementById("email-error").style.cssText =
      "color:rgb(15, 97, 14);font-weight:700;font-size:17px";
    document.getElementById("email-border").style.cssText =
      "border:2px solid rgb(15, 97, 14);display:inline-block;border-radius:12px;";
    submitCheck_e = 0;
  } else {
    document.getElementById("email-error").innerHTML = "Invalid email input";
    document.getElementById("email-error").style.cssText =
      "color:rgb(176, 11, 11);font-weight:700;font-size:17px";
    document.getElementById("email-border").style.cssText =
      "border:2px solid rgb(176, 11, 11);display:inline-block;border-radius:12px;";
    submitCheck_e = 1;
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
    document.getElementById("tel-error").style.cssText =
      "color:rgb(15, 97, 14);font-weight:700;font-size:17px";
    document.getElementById("tel-border").style.cssText =
      "border:2px solid rgb(15, 97, 14);display:inline-block;border-radius:12px;";
    submitCheck_n = 0;
  } else {
    document.getElementById("tel-error").innerHTML = "Invalid telephone number";
    document.getElementById("tel-error").style.cssText =
      "color:rgb(176, 11, 11);font-weight:700;font-size:17px";
    document.getElementById("tel-border").style.cssText =
      "border:2px solid rgb(176, 11, 11);display:inline-block;border-radius:12px;";
    submitCheck_n = 1;
  }
}

function ageFunc() {
  let age = parseInt(document.getElementById("age-check").value);
  if (age > 10 && age < 120) {
    document.getElementById("age-error").innerHTML = "Valid age";
    document.getElementById("age-error").style.cssText =
      "color:rgb(15, 97, 14);font-weight:700;font-size:17px";
    document.getElementById("age-border").style.cssText =
      "border:2px solid rgb(15, 97, 14);display:inline-block;border-radius:12px;";
    submitCheck_a = 0;
  } else {
    document.getElementById("age-error").innerHTML = "Invalid age";
    document.getElementById("age-error").style.cssText =
      "color:rgb(176, 11, 11);font-weight:700;font-size:17px";
    document.getElementById("age-border").style.cssText =
      "border:2px solid rgb(176, 11, 11);display:inline-block;border-radius:12px;";
    submitCheck_a = 1;
  }
}

function submitFunc() {
  if (
    submitCheck_fn == 1 ||
    submitCheck_ln == 1 ||
    submitCheck_e == 1 ||
    submitCheck_n == 1 ||
    submitCheck_a == 1
  ) {
    return false;
  } else return true;
}
