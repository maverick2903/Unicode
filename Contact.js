let submitCheck_fn = 1;
let submitCheck_ln = 1;
let submitCheck_e = 1;
let submitCheck_n = 1;
let submitCheck_a = 1;

function fnameFunc(nameCheck) {
  setTimeout(function () {
    let fName = document.getElementById(nameCheck).value;
    let extra_ctr = nameCheckFunc(fName);
    let fnameError = document.getElementById("fname-error");
    if (fName.length < 2 || extra_ctr != 0) {
      fnameError.innerHTML = "Invalid name input";
      fnameError.style.cssText =
        "color:rgb(176, 11, 11);font-weight:700;font-size:17px";
      document.getElementById("fname-border").style.cssText =
        "border:2px solid rgb(176, 11, 11);display:inline-block;border-radius:12px;";
      submitCheck_fn = 1;
    } else {
      fnameError.innerHTML = "";
      document.getElementById("fname-border").style.cssText = "border:none;";
      submitCheck_fn = 0;
    }
  }, 500);
}

function lnameFunc(nameCheck) {
  setTimeout(function () {
    let lName = document.getElementById(nameCheck).value;
    let extra_ctr = nameCheckFunc(lName);
    let lnameError = document.getElementById("lname-error");
    if (lName.length < 2 || extra_ctr != 0) {
      lnameError.innerHTML = "Invalid name input";
      lnameError.style.cssText =
        "color:rgb(176, 11, 11);font-weight:700;font-size:17px";
      document.getElementById("lname-border").style.cssText =
        "border:2px solid rgb(176, 11, 11);display:inline-block;border-radius:12px;";
      submitCheck_ln = 1;
    } else {
      lnameError.innerHTML = "";
      document.getElementById("lname-border").style.cssText = "border:none;";
      submitCheck_ln = 0;
    }
  }, 500);
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
  setTimeout(function () {
    let email = document.getElementById("email-check").value;
    let emailError = document.getElementById("email-error");
    if (
      email.indexOf("@") > 1 &&
      email.indexOf(".") > 0 &&
      email.indexOf(".") < email.length - 1 &&
      email.indexOf(".") >= email.indexOf("@") + 1
    ) {
      emailError.innerHTML = "Valid email input";
      emailError.style.cssText =
        "color:rgb(15, 97, 14);font-weight:700;font-size:17px";
      document.getElementById("email-border").style.cssText =
        "border:2px solid rgb(15, 97, 14);display:inline-block;border-radius:12px;";
      submitCheck_e = 0;
    } else {
      emailError.innerHTML = "Invalid email input";
      emailError.style.cssText =
        "color:rgb(176, 11, 11);font-weight:700;font-size:17px";
      document.getElementById("email-border").style.cssText =
        "border:2px solid rgb(176, 11, 11);display:inline-block;border-radius:12px;";
      submitCheck_e = 1;
    }
  }, 500);
}

function telephoneFunc() {
  setTimeout(function () {
    let tele = parseInt(document.getElementById("tel-check").value);
    let telError = document.getElementById("tel-error");
    if (
      (tele > 1000000000 && tele < 9999999999) ||
      (tele > 10000000 && tele < 99999999)
    ) {
      console.log(tele);
      telError.innerHTML = "Valid telephone number";
      telError.style.cssText =
        "color:rgb(15, 97, 14);font-weight:700;font-size:17px";
      document.getElementById("tel-border").style.cssText =
        "border:2px solid rgb(15, 97, 14);display:inline-block;border-radius:12px;";
      submitCheck_n = 0;
    } else {
      telError.innerHTML = "Invalid telephone number";
      telError.style.cssText =
        "color:rgb(176, 11, 11);font-weight:700;font-size:17px";
      document.getElementById("tel-border").style.cssText =
        "border:2px solid rgb(176, 11, 11);display:inline-block;border-radius:12px;";
      submitCheck_n = 1;
    }
  }, 500);
}

function ageFunc() {
  setTimeout(function () {
    let age = parseInt(document.getElementById("age-check").value);
    let ageError = document.getElementById("age-error");
    if (age > 10 && age < 120) {
      ageError.innerHTML = "Valid age";
      ageError.style.cssText =
        "color:rgb(15, 97, 14);font-weight:700;font-size:17px";
      document.getElementById("age-border").style.cssText =
        "border:2px solid rgb(15, 97, 14);display:inline-block;border-radius:12px;";
      submitCheck_a = 0;
    } else {
      ageError.innerHTML = "Invalid age";
      ageError.style.cssText =
        "color:rgb(176, 11, 11);font-weight:700;font-size:17px";
      document.getElementById("age-border").style.cssText =
        "border:2px solid rgb(176, 11, 11);display:inline-block;border-radius:12px;";
      submitCheck_a = 1;
    }
  }, 500);
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
