const listItems = [
  {
    id: 1,
    name: "صادق",
    family: "شیخی",
    nationalcode: "38104449265",
    phonenumber: "09182958875",
    gender: "مرد",
    dateOfBirth: "1377/01/02",
    emile: "-",
  },
  {
    id: 2,
    name: "صنعان ",
    family: "مارابی",
    nationalcode: "38964556232",
    phonenumber: "09182958976",
    gender: "مرد",
    dateOfBirth: "1379/10/06",
    emile: "-",
  },
  {
    id: 3,
    name: "سهند",
    family: "مجیدی",
    nationalcode: "38104449265",
    phonenumber: "09182958858",
    gender: "مرد",
    dateOfBirth: "1373/12/08",
    emile: "-",
  },
  {
    id: 4,
    name: "دریا",
    family: "ایزدی",
    nationalcode: "38964556232",
    phonenumber: "09123958875",
    gender: "زن",
    dateOfBirth: "1374/08/02",
    emile: "-",
  },
  {
    id: 5,
    name: "حسن",
    family: "قادری ",
    nationalcode: "38104449265",
    phonenumber: "09182486875",
    gender: "مرد",
    dateOfBirth: "1378/08/02",
    emile: "-",
  },

  {
    id: 6,
    name: "آزاده",
    family: "ساعدی",
    nationalcode: "38964556232",
    phonenumber: "09182958875",
    gender: "زن",
    dateOfBirth: "1372/05/15",
    emile: "-",
  },
  {
    id: 7,
    name: "امیر",
    family: "زاهدی",
    nationalcode: "38104449265",
    phonenumber: "09175825697",
    gender: "مرد",
    dateOfBirth: "1371/05/14",
    emile: "-",
  },
  {
    id: 8,
    name: "واحد",
    family: "محمدی",
    nationalcode: "38964556232",
    phonenumber: "09221052346",
    gender: "مرد",
    dateOfBirth: "1372/05/15",
    emile: "-",
  },
  {
    id: 9,
    name: "کسری",
    family: "رشیدی",
    nationalcode: "38104449265",
    phonenumber: "09125374174",
    gender: "مرد",
    dateOfBirth: "1378/01/25",
    emile: "-",
  },
  {
    id: 10,
    name: "ریناس",
    family: "محمدی",
    nationalcode: "38964556232",
    phonenumber: "09122958896",
    gender: "مرد",
    dateOfBirth: "1379/03/03",
    emile: "-",
  },
];

let itemsPerPage = listItems.slice(0, 10);

let tableBody = document.querySelector("#table-body");
let selectedItems = itemsPerPage.slice(0, 1);
document.getElementById("select-number").addEventListener("change", (e) => {
  selectedItems = itemsPerPage.slice(0, +e.target.value);
  displayUesrsList(selectedItems,tableBody);
});

function displayUesrsList(allUesrsArray, usersContainer) {
  usersContainer.innerHTML = "";
  let paginatedUsers = allUesrsArray;
  paginatedUsers.forEach(function (user) {
    usersContainer.insertAdjacentHTML(
      "afterbegin",
        `<tr>
          <td>${user.name + " " + user.family}</td>
          <td>${user.nationalcode}</td>
          <td>${user.phonenumber}</td>
          <td>${user.gender}</td>
          <td>${user.dateOfBirth}</td>
          <td>${user.emile}</td>
        </tr>`
    );
  });
}
displayUesrsList(selectedItems, tableBody);
