const passwordInput=document.getElementById("password-set");
const secondPassword=document.getElementById("password-repeat");
const errorMessage = document.getElementById("error");
const correctMessage = document.getElementById("correct");
const errorText = document.getElementById("error-repeat");
const correctText = document.getElementById("correct-repeat");
const eyeSelector = document.querySelector("#eye");
const repeatEyeSelector = document.querySelector("#eyes");
const btnClick = document.getElementById("btn");


const passwordSelector=passwordInput.addEventListener("input",password);
const secondPasswordSelector = secondPassword.addEventListener("input",repeat);
const eye = eyeSelector.addEventListener("click", eyeHandler);
const eyes = repeatEyeSelector.addEventListener("click", repeatEyeHandler);
const btnClickAdd = btnClick.addEventListener("click", button);




var regex = new RegExp("(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
function password() {
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

function repeat() {
//   const pattern_number = /[0-9]/;
  if (secondPassword.value.length > 7) {
    secondPassword.classList.remove("invalid");
    secondPassword.classList.add("valid");
    errorText.innerHTML = "";
  } else {
    secondPassword.classList.remove("valid");
    secondPassword.classList.add("invalid");
    errorText.innerHTML = " پسورد شما باید بیشتر از 8 کاراکتر باشد";
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
//end

function repeatEyeHandler() {
  if (secondPassword.type == "password") {
    repeatEyeSelector.classList.remove("fa-eye-slash");
    repeatEyeSelector.classList.add("fa-eye");
    secondPassword.type = "text";
  } else {
    repeatEyeSelector.classList.remove("fa-eye");
    repeatEyeSelector.classList.add("fa-eye-slash");
    secondPassword.type = "password";
  }
}



function button(e) {
  // e.preventdefault();
  if (secondPassword.value == "" && passwordInput.value == "") {
    alert("فیلدها نباید خالی باشند");
  } else {
  }
  if (passwordInput.value === secondPassword.value) {
    errorText.innerHTML = "";
  } else {
    errorText.innerHTML = "رمز عبور و تکرار رمز عبور با هم برابر نیستند ";
  }
}