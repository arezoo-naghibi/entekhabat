const selector = document.getElementById("select-box");
const selectorAccordion = document.getElementById("my-accordion");
const selectorUp = document.getElementById("chervon");

const selectId = selector.addEventListener("click", accordion);
let isRotated = false;
function accordion() {
  selectorAccordion.classList.toggle("hidden");
  if (isRotated === true) {
    selectorUp.style.transform = "rotate(0deg)";
    isRotated = false;
  } else {
    selectorUp.style.transform = "rotate(180deg)";
    isRotated = true;
  }
}

//for add new content
const nameInput = document.querySelector("#family");
const nationalInput = document.querySelector("#national");
const phoneInput = document.querySelector("#phone");
const maritalStatuseInput = document.querySelector("#marital-status");
const dateInput = document.querySelector("#date");
const emailInput = document.querySelector("#email");
const adresInput = document.querySelector("#adress");
const submitInput = document.querySelector("#submit");
const boardsContainer = document.querySelector("#table-body");

let boards = [];

submitInput.addEventListener("click", function (event) {
  event.preventDefault();

  let nameInputValue = nameInput.value;
  let nationalInputValue = nationalInput.value;
  let phoneInputValue = phoneInput.value;
  let maritalStatuseInputValue = maritalStatuseInput.value;
  let dateInputValue = dateInput.value;
  let emailInputVlue = emailInput.value;
  let adresInputValue = adresInput.value;

  if (
    nameInputValue === "" ||
    nationalInputValue === "" ||
    phoneInputValue === "" ||
    maritalStatuseInputValue === "" ||
    dateInputValue === "" ||
    emailInputVlue === "" ||
    adresInputValue === ""
  ) {
    alert(" لطفا همه ی  اینپوت ها را پر کنید ");
  } else {
    let newboardsObj = {
      id: boards.length + 1,
      name: nameInputValue,
      national: nationalInputValue,
      number: phoneInputValue,
      statuse: maritalStatuseInputValue,
      date: dateInputValue,
      email: emailInputVlue,
      adres: adresInputValue,
    };
    boards.push(newboardsObj);
    setIntoLocalStorage(boards);
    boardsGenerator(boards);
   
  }
});
function setIntoLocalStorage(allboards) {
  localStorage.setItem("board", JSON.stringify(allboards));
  makeEmptyInputs();
}

function getBoardsFromLocalStorage() {
  let localStorageBoards = localStorage.getItem("board");

  if (localStorageBoards) {
    boards = JSON.parse(localStorageBoards);
    boardsGenerator(boards);
  }
}




function makeEmptyInputs() {
  nameInput.value = "";
  nationalInput.value = "";
  phoneInput.value = "";
  maritalStatuseInput.value = "";
  dateInput.value = "";
  emailInput.value = "";
  adresInput.value = "";
}
function boardsGenerator() {
  boardsContainer.innerHTML = "";

  boards.forEach(function (board) {
    let newboardElem = document.createElement("tr");

    let newnameTh = document.createElement("td");
    newnameTh.innerHTML = board.name;

    let newnationalTh = document.createElement("td");
    newnationalTh.innerHTML = board.national;

    let newnumberTh = document.createElement("td");
    newnumberTh.innerHTML = board.number;

    let newstatuseTh = document.createElement("td");
    newstatuseTh.innerHTML = board.statuse;

    let newdateTh = document.createElement("td");
    newdateTh.innerHTML = board.date;

    let newemailTh = document.createElement("td");
    newemailTh.innerHTML = board.email;

    newboardElem.append(
      newnameTh,
      newnationalTh,
      newnumberTh,
      newstatuseTh,
      newdateTh,
      newemailTh
    );

    boardsContainer.append(newboardElem);
  });
}


window.addEventListener("load", getBoardsFromLocalStorage);
