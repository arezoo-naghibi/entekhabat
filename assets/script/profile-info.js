
const selectorPassword = document.getElementById("change-pass");
const selectorModal = document.getElementById("modal-up");
const selectorCall = document.getElementById("modal-call");
const selectorChangeNumber = document.getElementById("phone-number");
const selectoreSignature = document.getElementById("signature");
const selectorSign = document.getElementById("digital-sign");


const pass = selectorPassword.addEventListener("click", print);
const call = selectorChangeNumber.addEventListener("click" , itemCall);
const signature = selectorSign.addEventListener("click", itemsignature);




function print() {
  if (selectorModal.classList.contains("hidden")) {
    selectorModal.classList.remove("hidden");
  }
}
function itemCall() {
     if (selectorCall.classList.contains("hidden")) {
      selectorCall.classList.remove("hidden");
     }
}
function itemsignature(){
    if (selectoreSignature.classList.contains("hidden")) {
      selectoreSignature.classList.remove("hidden");
    }
}