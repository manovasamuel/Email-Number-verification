"use strict";

const email = document.getElementById("email");
const number = document.getElementById("number");
const submitBtn = document.querySelector(".btn");
const result = document.querySelector(".heading-1");
const resetBtn = document.querySelector(".reset");
function checkEmailNumber() {
  const mailCondition =
    email.value.endsWith("@gmail.com") &&
    email.value.length > 0 &&
    email.value.includes("@gmail.com");

  const numberCondition = number.value.length > 0 && number.value.length < 11;

  if (mailCondition && numberCondition) {
    result.style.color = "green";
    result.textContent = "valid E-mail and Number";
    result.style.fontFamily = "'Press Start 2P', sanserif";
  } else if (mailCondition && !numberCondition) {
    result.style.color = "orange";
    result.textContent = "Invalid Number";
    result.style.fontFamily = "'Press Start 2P', sanserif";
  } else if (!mailCondition && numberCondition) {
    result.style.color = "orange";
    result.textContent = "Invalid E-mail";
    result.style.fontFamily = "'Press Start 2P', sanserif";
  } else {
    result.style.color = "red";
    result.textContent = "Invalid E-mail and Number";
    result.style.fontFamily = "'Press Start 2P', sanserif";
  }
}

submitBtn.addEventListener("click", checkEmailNumber);

function resetEmailNumber() {
  email.value = "";
  number.value = "";
  result.style.fontSize = "80px";

  result.style.color = "#9c6137";
  result.textContent = "Enter Your Details";
  result.style.fontFamily = "'Brush Script MT', 'Brush Script Std', cursive";
}

resetBtn.addEventListener("click", resetEmailNumber);
