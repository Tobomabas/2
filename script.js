import { rowData } from "./data.js";
const sound = new Audio("./sound.mp3");
const mainWrapperDiv = document.createElement("div");
const body = document.querySelector("body");
const header = document.createElement("header");
const navBar = document.createElement("nav");
const main = document.createElement("main");
const headerSpan = document.createElement("span");
const logoDiv = document.createElement("div");
const headerButtonsDiv = document.createElement("div");
const searchDiv = document.createElement("div");
const fistSerachInput = document.createElement("input");
const secondSerachInput = document.createElement("input");
const menuList = document.createElement("ul");
const mainButton = document.createElement("button");
const colorBtn = document.createElement("button");
const bwBtn = document.createElement("button");
const deleteSelectedButton = document.createElement("button");
const paginDiv = document.createElement("div");
const paginInput = document.createElement("input");
const inputSpan = document.createElement("span");
const leftArr = document.createElement("button");
const rightArr = document.createElement("button");
const nextSpan = document.createElement("span");
const select = document.createElement("select");
const option = document.createElement("option");
const option2 = document.createElement("option");
const modalContainer = document.createElement("div");
const modalContent = document.createElement("div");
const closeBtn = document.createElement("span");
const modalTable = document.createElement("table");
const modalThead = document.createElement("thead");
const modalTheadTr = document.createElement("tr");
const modalTheadTh1 = document.createElement("th");
const modalTheadTh2 = document.createElement("th");
const modalTbody = document.createElement("tbody");
let actualRows;
let table;
let typedWord = "";

searchDiv.id = "searchContainer";
mainButton.className = "main-button";
headerButtonsDiv.id = "headerButtonsDiv";
mainWrapperDiv.className = "main-wrapper";
colorBtn.innerText = "Full Color Theme";
colorBtn.id = "color-btn";
bwBtn.id = "bw-btn";
bwBtn.innerText = "B/W Theme";
deleteSelectedButton.id = "delete-selected-button";
deleteSelectedButton.textContent = "Remove All";
paginDiv.id = "pagin-div";
leftArr.className = "paginArrows";
rightArr.className = "paginArrows";
paginInput.type = "number";
paginInput.id = "paginInput";
paginInput.min = "1";
paginInput.step = "1";
paginInput.value = "1";
nextSpan.id = "site-count-span";
option.value = "10";
option.innerText = "10";
option2.value = "20";
option2.innerText = "20";
select.name = "pages";
select.id = "pages";
header.id = "header";
logoDiv.id = "logo-div";
headerSpan.id = "headerSpan";
headerSpan.innerText = "Wpisz nazwisko Luk'ea aby uruchomić dzwięk";
modalContainer.id = "modal-container";
modalContent.id = "modal-content";
closeBtn.id = "close-btn";
closeBtn.textContent = "Zamknij okno";
modalThead.id = "modal-thead";
modalTheadTh1.textContent = "Key";
modalTheadTh2.textContent = "Value";
modalTheadTr.id = "modal-thead-tr";
modalTable.id = "modal-table";
closeBtn.addEventListener("click", () => {
  modalContainer.remove();
});
body.appendChild(mainWrapperDiv);
mainWrapperDiv.appendChild(header);
header.append(headerSpan, headerButtonsDiv);
headerButtonsDiv.append(colorBtn, bwBtn);
mainWrapperDiv.append(navBar, logoDiv, main);
main.appendChild(searchDiv);
headerButtonsDiv.appendChild(deleteSelectedButton);
select.append(option, option2);
modalContent.appendChild(closeBtn);
modalContent.appendChild(modalTable);
modalTable.appendChild(modalThead);
modalThead.appendChild(modalTheadTr);
modalTheadTr.append(modalTheadTh1, modalTheadTh2);
navBar.appendChild(menuList);
searchDiv.append(
  (document.createElement("span").innerText = "Search by index"),
  fistSerachInput,
  (document.createElement("span").innerText = "Search by text"),
  secondSerachInput
);
document.addEventListener("keydown", function (event) {
  if (event.key.length === 1) {
    typedWord += event.key.toLowerCase();
    if (typedWord.includes("skywalker")) {
      sound.play();
      typedWord = "";
    }
  }
});
logoDiv.addEventListener("click", () => {
  logoDiv.remove();
});

function createModal(rowData) {
  Object.entries(rowData).forEach(([key, value]) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.id = "modal-key";
    td2.id = "modal-val";
    modalTbody.appendChild(tr);
    td1.textContent = key;
    tr.appendChild(td1);
    td2.textContent = value;
    if (td2.textContent.length > 30) {
      td2.textContent = td2.textContent.slice(0, 30) + "...";
    }
    tr.appendChild(td2);
  });
  modalTable.appendChild(modalTbody);
  modalContainer.appendChild(modalContent);
  body.appendChild(modalContainer);
}

function checkIfTableIsEmpty() {
  const rows = table.querySelectorAll("tbody tr");
  const existingEmptyMessage = document.getElementById("empty-message");
  if (rows.length === 0 && !existingEmptyMessage) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Tabela jest pusta";
    emptyMessage.id = "empty-message";
    main.appendChild(emptyMessage);
  } else if (rows.length > 0 && existingEmptyMessage) {
    existingEmptyMessage.remove();
  }
}

for (let key in rowData) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.className = "link";
  link.href = `#${key}`;
  link.textContent = key.toUpperCase();
  link.addEventListener("click", () => {
    searchDiv.style.visibility = "visible";
    if (table) {
      table.remove();
    }
    table = document.createElement("table");
    table.id = "main-table";
    const tbody = document.createElement("tbody");
    const thead = document.createElement("thead");
    thead.id = "mainTableThead";
    table.appendChild(thead);
    table.appendChild(tbody);
    const headerRow = document.createElement("tr");
    main.append(table, paginDiv);
    paginDiv.append(leftArr, inputSpan, rightArr, select);
    inputSpan.append(paginInput, nextSpan);
    let headers = [];
    switch (key) {
      case "vehicles":
        headers = [
          { label: "ID", key: "id" },
          { label: "Name", key: "name" },
          { label: "Model", key: "model" },
          { label: "Length", key: "length" },
          { label: "Created", key: "created" },
          { label: "Actions", key: "actions" },
        ];
        break;
      case "starships":
        headers = [
          { label: "ID", key: "id" },
          { label: "Name", key: "name" },
          { label: "Model", key: "model" },
          { label: "Length", key: "length" },
          { label: "Created", key: "created" },
          { label: "Actions", key: "actions" },
        ];
        break;
      case "species":
        headers = [
          { label: "ID", key: "id" },
          { label: "Name", key: "name" },
          { label: "Average Height", key: "average_height" },
          { label: "Language", key: "language" },
          { label: "Created", key: "created" },
          { label: "Actions", key: "actions" },
        ];
        break;
      case "planets":
        headers = [
          { label: "ID", key: "id" },
          { label: "Name", key: "name" },
          { label: "Climate", key: "climate" },
          { label: "Terrain", key: "terrain" },
          { label: "Created", key: "created" },
          { label: "Actions", key: "actions" },
        ];
        break;
      case "people":
        headers = [
          { label: "ID", key: "id" },
          { label: "Name", key: "name" },
          { label: "Gender", key: "gender" },
          { label: "Eye Color", key: "eye_color" },
          { label: "Created", key: "created" },
          { label: "Actions", key: "actions" },
        ];
        break;
      case "films":
        headers = [
          { label: "ID", key: "id" },
          { label: "Title", key: "title" },
          { label: "Director", key: "director" },
          { label: "Release Date", key: "release_date" },
          { label: "Created", key: "created" },
          { label: "Actions", key: "actions" },
        ];
        break;
    }
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        links.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      });
    });
    headers.forEach(({ label }) => {
      const th = document.createElement("th");
      th.appendChild(document.createTextNode(label));
      headerRow.appendChild(th);
      thead.appendChild(headerRow);
    });
    const items = rowData[key];
    let indexCounter = 1;
    items.forEach((item) => {
      const tr = document.createElement("tr");
      ////////
      tr.dataindex = indexCounter;
      headers.forEach(({ key }) => {
        let toDisplay = item[key];
        const td = document.createElement("td");
        if (key === "created") {
          const date = new Date(toDisplay);
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();
          toDisplay = `${day}-${month}-${year}`;
        }
        td.innerHTML = key === "id" ? indexCounter : toDisplay;
        if (key === "actions") {
          td.innerHTML = "";
          td.id = "actions-cell";

          const removeRowBtn = document.createElement("button");
          removeRowBtn.className = "remove-row-btn";

          const showModalBtn = document.createElement("button");
          showModalBtn.className = "show-modal-btn";
          showModalBtn.textContent = "?";
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          showModalBtn.addEventListener("click", () => {
            createModal(item);
          });
          removeRowBtn.addEventListener("click", () => {
            const row = td.closest("tr");
            if (row) {
              row.remove();
              checkIfTableIsEmpty();
              updateFirstInputPLaceholedr();
              updatePagination();
            }
          });
          td.appendChild(removeRowBtn);
          td.appendChild(showModalBtn);
          td.appendChild(checkbox);
        }
        tr.appendChild(td);
      });
      indexCounter++;
      tbody.appendChild(tr);
    });

    fistSerachInput.placeholder = `1 from ${indexCounter - 1}`;
    const searchBy = headerRow.querySelector("th:nth-child(2)").textContent;
    secondSerachInput.placeholder = `Search by ${searchBy}`;

    function updateDeleteButtonVisibility() {
      const checkboxes = table.querySelectorAll("input[type='checkbox']");
      const anyChecked = Array.from(checkboxes).some(
        (checkbox) => checkbox.checked
      );
      deleteSelectedButton.style.display = anyChecked ? "block" : "none";
    }
    table.addEventListener("change", (event) => {
      if (event.target.type === "checkbox") {
        updateDeleteButtonVisibility();
      }
    });
    function filterRowByIndex(index) {
      const rows = table.querySelectorAll("tbody tr");
      let found = false;
      rows.forEach((row) => {
        const rowIndex = row.getAttribute("dataindex");
        if (rowIndex && parseInt(rowIndex) === index) {
          row.classList.remove("hidden");
          found = true;
        } else {
          row.classList.add("hidden");
        }
      });
      if (!found) {
        alert("Nie znaleziono wiersza o podanym indeksie");
      }
    }
    function filterRowByText(searchText) {
      const rows = table.querySelectorAll("tbody tr");
      rows.forEach((row) => {
        const secondCell = row.querySelector("td:nth-child(2)");
        if (
          secondCell &&
          secondCell.textContent.toLowerCase().includes(searchText)
        ) {
          row.classList.remove("hidden");
        } else {
          row.classList.add("hidden");
        }
      });
    }
    function showAllRows() {
      const rows = table.querySelectorAll("tbody tr");
      rows.forEach((row) => {
        row.classList.remove("hidden");
      });
    }
    fistSerachInput.addEventListener("input", (event) => {
      const index = parseInt(event.target.value);
      if (!isNaN(index)) {
        filterRowByIndex(index);
      } else {
        showAllRows();
      }
    });
    secondSerachInput.addEventListener("input", (event) => {
      const searchText = event.target.value.toLowerCase();
      filterRowByText(searchText);
    });
    deleteSelectedButton.addEventListener("click", () => {
      const checkboxes = table.querySelectorAll(
        "input[type='checkbox']:checked"
      );
      checkboxes.forEach((checkbox) => {
        const row = checkbox.closest("tr");
        if (row) {
          row.remove();
        }
      });

      updateFirstInputPLaceholedr();
      updateDeleteButtonVisibility();
      checkIfTableIsEmpty();
      updatePagination();
    });
    checkIfTableIsEmpty();
    let currentRowsPerPage = 10;
    let currentPage = 1;
    function paginateTable(rowsPerPage, page) {
      const rows = table.querySelectorAll("tbody tr");
      const totalRows = rows.length;
      const totalPages = Math.ceil(totalRows / rowsPerPage);
      if (page < 1) {
        page = 1;
      } else if (page > totalPages) {
        page = totalPages;
      }
      rows.forEach((row) => row.classList.add("hidden"));
      const start = (page - 1) * rowsPerPage;
      const end = Math.min(start + rowsPerPage, totalRows);
      for (let i = start; i < end; i++) {
        rows[i].classList.remove("hidden");
      }
      currentPage = page;
      updatePaginationDisplay(totalPages);
    }
    function updatePaginationDisplay(totalPages) {
      paginInput.value = currentPage;
      nextSpan.textContent = ` z ${totalPages}`;
      leftArr.disabled = currentPage === 1;
      rightArr.disabled = currentPage === totalPages;
    }
    select.addEventListener("change", () => {
      const newRowsPerPage = parseInt(select.value);
      currentRowsPerPage = newRowsPerPage;
      const firstRowCurrentPage = (currentPage - 1) * currentRowsPerPage + 1;
      const newPage = Math.ceil(firstRowCurrentPage / newRowsPerPage);
      paginateTable(currentRowsPerPage, newPage);
    });
    leftArr.removeEventListener("click", handleLeftArrow);
    leftArr.addEventListener("click", handleLeftArrow);
    function handleLeftArrow() {
      if (currentPage > 1) {
        paginateTable(currentRowsPerPage, currentPage - 1);
      }
    }
    rightArr.removeEventListener("click", handleRightArrow);
    rightArr.addEventListener("click", handleRightArrow);
    function handleRightArrow() {
      const totalRows = table.querySelectorAll("tbody tr").length;
      const totalPages = Math.ceil(totalRows / currentRowsPerPage);
      if (currentPage < totalPages) {
        paginateTable(currentRowsPerPage, currentPage + 1);
      }
    }
    paginInput.addEventListener("change", (event) => {
      const page = parseInt(event.target.value);
      paginateTable(currentRowsPerPage, page);
    });
    function initializePagination() {
      paginateTable(currentRowsPerPage, 1);
    }
    initializePagination();
    const updateFirstInputPLaceholedr = () => {
      actualRows = table.querySelectorAll("tbody tr").length;
      fistSerachInput.placeholder = `1 from ${actualRows}`;
    };
    function updatePagination() {
      const totalRows = table.querySelectorAll("tbody tr").length;
      const totalPages = Math.ceil(totalRows / currentRowsPerPage);
      paginateTable(currentRowsPerPage, currentPage);
    }
  });

  bwBtn.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "bw");
  });
  colorBtn.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "color");
  });
  listItem.appendChild(link);
  menuList.appendChild(listItem);
}
