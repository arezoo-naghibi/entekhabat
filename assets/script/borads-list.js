const selectorDelete = document.getElementById("delete");
const selectorModal = document.getElementById("modal-pop-up");
const selectorAdd = document.getElementById("new-board");
const selectorBoards = document.getElementById("boards-modal");
// const selectorDeleteItem = document.getElementById("delete-item");

const buttonDelete = selectorDelete.addEventListener("click", deleteitem);
const buttonSelector = selectorAdd.addEventListener("click", print);
// const deletebox = selectorDeleteItem.addEventListener("click",deleteModal);

function print() {
  if (selectorBoards.classList.contains("hidden")) {
    selectorBoards.classList.remove("hidden");
  }
}

let customer = [
  { id: "1", name: "sahar", number: "10" },
  { id: "2", name: "mona", number: "11" },
  { id: "3", name: "mitra", number: "12" },
  { id: "4", name: "namam", number: "13" },
  { id: "5", name: "kasra", number: "14" },
  { id: "6", name: "arezoo", number: "15" },
  { id: "7", name: "parinaz", number: "16" },
];

const submitSelector = document.getElementById("submit");

const submitinput = submitSelector.addEventListener("click", subbmit);

function addtoArray(name, number) {
  let x = Math.random() * 100;
  const object = {
    id: x,
    name: name,
    number: number,
  };
  customer.push(object);
}

function subbmit() {
  let inputName = document.getElementById("input-name").value;
  let inputNumber = document.getElementById("input-number").value;
  addtoArray(inputName, inputNumber);
  updateList();
  selectorBoards.classList.add("hidden");
}

function updateList() {
  let inputContainer = document.getElementById("cont");
  inputContainer.innerHTML = "";
  customer.forEach(function (item) {
    inputContainer.insertAdjacentHTML(
      "afterbegin",
      `<div  class="container">
                        <div class="right-container">
                            <div class="img-truck">
                                <img src="./assets/img/avatar-truck.png">
                            </div>
                            <div class="text-container">
                                <span>
                                     ${item.name}
                                </span>
                                <span>
                                    مجموع اعضا ${item.number} نفر
                                </span>
                            </div>
                        </div>
                        <div class="left-container">
                            <button class="edit" id="push">
                                <i class="fa fa-pencil-square-o">
                                    <span>
                                        ویرایش
                                    </span>
                                </i>
                            </button>

                            <button class="delete" data-id="${item.id}" id="delete">
                                <i class="fa fa-trash">
                                    <span>
                                        حذف
                                    </span>
                                </i>
                            </button>
                        </div>
                    </div>`
    );
  });

  let btn = document.querySelectorAll("#delete");
  btn.forEach(function (item) {
    item.addEventListener("click", deleteitem);
  });
}

updateList();

function deleteitem(e) {
  let set = e.target.closest("#delete").dataset.id;
  customer=customer.filter((item) => item.id !== set);
updateList();

}




// function deleteitem() {
//   if (selectorModal.classList.contains("hidden")) {
//     selectorModal.classList.remove("hidden");
//   }
// }
