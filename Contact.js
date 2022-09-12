function nameFunc() {
  let fName = document.getElementById("fname-check").value;

  if (fName.length < 2) {
    document.getElementById("name-error").innerHTML = "Invalid name input";
    //return false;
  } else document.getElementById("name-error").innerHTML = "";
}

function marginColor() {
  let fName = document.getElementById("fname-check").value;
  console.log("step1");
  if (fName.length < 2) {
    fName.style.color = "#f0f0f0";
    console.log("step2");
  }
}
