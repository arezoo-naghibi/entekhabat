const verificationCode = document.getElementById("verification");
const eyeSelector = document.querySelector("#eye");
const repeatEyeSelector = document.querySelector("#eyes");
const passwordInput = document.getElementById("newpass");
const passInput = document.getElementById("repeatpass");
const btnClick = document.getElementById("btn");
const errorOtpMessage=document.getElementById("error-otp");
const correctOtpMessage = document.getElementById("correct-otp");
const errorMessage=document.getElementById("error");
const correctMessage = document.getElementById("correct");
const errorText= document.getElementById("error-repeat");
const correctText = document.getElementById("correct-repeat");


const verificate = verificationCode.addEventListener("input", generateOTP);
const eye = eyeSelector.addEventListener("click", eyeHandler);
const eyes = repeatEyeSelector.addEventListener("click", repeatEyeHandler);
const passwordAdd = passwordInput.addEventListener("input", pass);
const password = passInput.addEventListener("input", repeat);
const btnClickAdd = btnClick.addEventListener("click", button);

//Send verification code
function generateOTP() {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 5; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  if(verificationCode.value.length == 5) {
    verificationCode.classList.remove("invalid");
    verificationCode.classList.add("valid");
    errorOtpMessage.innerHTML = "";
  }
  else{
    verificationCode.classList.remove("valid");
    verificationCode.classList.add("invalid");
    errorOtpMessage.innerHTML = "  کد تایید شما باید 5 رقم باشد"; 
  }
  if (verificationCode.value.length > verificationCode.maxLength){
    verificationCode.value = verificationCode.value.slice(0, verificationCode.maxLength);
  }
  return OTP;
}
// console.log(generateOTP());
//end


// When the cross is crossed, the input will be deleted
function closeBox() {
  verificationCode.value = "";
  national();
}
//end

//password
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
  // if (pattern_number.test(passwordInput.value) == true) {
  //   passwordMessage.classList.remove("invalid");
  //   passwordInput.classList.add("valid");
  //   errorMessage.innerHTML = "";
  // } else {
  //   passwordInput.classList.remove("valid");
  //   passwordInput.classList.add("invalid");
  //   errorMessage.innerHTML = "عدد را وارد کنید";
  // }
  // // Validate lowercase letters
  // var pattern_lowerCaseLetters = /[a-z]/g;
  // if (pattern_lowerCaseLetters.value.length > 1) {
  //   errorMessage.innerHTML = "";
  // }
  // if (pattern_lowerCaseLetters.test(passwordInput.value) == true) {
  //   passwordInput.classList.remove("invalid");
  //   passwordInput.classList.add("valid");
  //   // errorMessage.innerHTML = "";
  // } else {
  //   passwordInput.classList.remove("valid");
  //   passwordInput.classList.add("invalid");
  //   errorMessage.innerHTML = " پسورد شما باید حداقل شامل یک حروف کوچک باشد ";
  // }
}

function repeat(){
const pattern_number = /[0-9]/;
if (passInput.value.length > 7) {
  passInput.classList.remove("invalid");
  passInput.classList.add("valid");
  errorText.innerHTML = "";
} else {
  passInput.classList.remove("valid");
  passInput.classList.add("invalid");
  errorText.innerHTML = " پسورد شما باید بیشتر از 8 کاراکتر باشد";
}
}





// National code should not be more than number
function national(e) {
  if (verificationCode.value.length == 5) {
    verificationCode.classList.add("valid");
    verificationCode.classList.remove("invalid");
  } else {
    verificationCode.classList.remove("valid");
    verificationCode.classList.add("invalid");
  }
  if (nationalCodeInput.value.length <= 0) {
    closeSelector.style.display = "none";
  } else {
    closeSelector.style.display = "flex";
  }
}
//end

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
  if (passInput.type == "password") {
    repeatEyeSelector.classList.remove("fa-eye-slash");
    repeatEyeSelector.classList.add("fa-eye");
    passInput.type = "text";
  } else {
    repeatEyeSelector.classList.remove("fa-eye");
    repeatEyeSelector.classList.add("fa-eye-slash");
    passInput.type = "password";
  }
}

//Click the confirm button
function button(e) {
  // e.preventdefault();
  if (verificationCode.value == "" && passInput.value =="" ){
    alert("فیلدها نباید خالی باشند");
  }else{

  }
  if (passwordInput.value === passInput.value) {
    correctText.innerHTML = "";
  } else {
    errorText.innerHTML = "رمز عبور و تکرار رمز عبور با هم برابر نیستند ";
  }
  
}
//end
