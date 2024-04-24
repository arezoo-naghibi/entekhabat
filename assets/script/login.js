const nationalCodeInput = document.getElementById("national-code");
const btnClick = document.getElementById("btn");
const passwordInput = document.getElementById("password");
const errorParagraph = document.querySelector("#error");
const correctParagraph = document.querySelector("#correct");
const eyeSelector = document.querySelector("#eye");
const closeSelector = document.getElementById("close");
const errorMessage = document.querySelector("#error-password");
const correctMessage = document.querySelector("#correct-ppassword");

const nationalCode = nationalCodeInput.addEventListener("input", national);
const close = closeSelector.addEventListener("click", closeBox);
const btnClickAdd = btnClick.addEventListener("click", btn);
const passwordAdd = passwordInput.addEventListener("input", pass);
const eye = eyeSelector.addEventListener("click", eyeHandler);

// When the cross is crossed, the input will be deleted
function closeBox() {
  nationalCodeInput.value = "";
  national();
}

// National code should not be more than number
function national(e) {
  if (nationalCodeInput.value.length == 10) {
    nationalCodeInput.classList.add("valid");
    nationalCodeInput.classList.remove("invalid");
    errorParagraph.innerHTML = "";
  } else {
    nationalCodeInput.classList.remove("valid");
    nationalCodeInput.classList.add("invalid");
  }
  if (nationalCodeInput.value.length <= 0) {
    closeSelector.style.display = "none";
  } else {
    closeSelector.style.display = "flex";
  }
  if (nationalCodeInput.value.length > nationalCodeInput.maxLength) {
    nationalCodeInput.value = nationalCodeInput.value.slice(0,nationalCodeInput.maxLength);
  }
}

function btn(event) {
 
  event.preventDefault();
  if (nationalCodeInput.value.length === 10) {
    // correctParagraph.innerHTML = "کدملی شما درست است.";
    errorParagraph.innerHTML = " ";
  } else {
    errorParagraph.innerHTML = "کدملی شما باید 10 رقم باشد.";
    correctParagraph.innerHTML = " ";
  }
  if (nationalCodeInput.value === "" && passwordInput.value === "") {
    errorParagraph.innerHTML = "کدملی باید وارد شود ";
    errorMessage.innerHTML = "رمز عبور باید وارد شود ";
  }
  
}

// The password will be displayed when clicked
function eyeHandler() {
  if (passwordInput.type == "password") {
    eyeSelector.classList.remove("fa-eye-slash");
    eyeSelector.classList.add("fa-eye");
    passwordInput.type = "text";
  } else {
    eyeSelector.classList.remove("fa-eye");
    eyeSelector.classList.add("fa-eye-slash");
    passwordInput.type = "password";
  }
}

var regex = new RegExp("(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
function pass() {
  const pattern_number = /[0-9]/;
  if (passwordInput.value.length > 7) {
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");
    errorMessage.innerHTML = "";
  } else {
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
    errorMessage.innerHTML = " پسورد شما باید بیشتر از 8 کاراکتر باشد";
  }
}
