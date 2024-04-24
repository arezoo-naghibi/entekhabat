const nationalCodeInput = document.getElementById("national-code");
const closeSelector = document.getElementById("close");
const errorParagraph = document.querySelector("#error");
const correctParagraph = document.querySelector("#correct");

const nationalCode = nationalCodeInput.addEventListener("input", national);
const close = closeSelector.addEventListener("click", closeBox);


// When the cross is crossed, the input will be deleted
function closeBox() {
  nationalCodeInput.value = "";
  national();
}

// National code should not be more than number
function national(e) {
    console.log(e);
  if (nationalCodeInput.value.length == 10) {
    nationalCodeInput.classList.add("valid");
    nationalCodeInput.classList.remove("invalid");
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
    nationalCodeInput.value = nationalCodeInput.value.slice( 0, nationalCodeInput.maxLength);
  } 
}

