// Создание карты

ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [53.94038081294873, 27.596907882932577],
    zoom: 17,
  });
}

// Модальное окно

const btnCallMe = document.getElementById("btnCallMe");

const modalWindow = document.getElementById("modalWindow");
const modalInputName = document.getElementById("modalInputName");
const modalInputEmail = document.getElementById("modalInputEmail");
const modalBtnClose = document.getElementById("modalBtnClose");
const modalBtnSend = document.getElementById("modalBtnSend");

function printModal() {
  modalWindow.classList.remove("d-none");
}

function closeModal() {
  modalWindow.classList.add("d-none");
}

btnCallMe.addEventListener("click", () => {
  printModal();
});

modalBtnClose.addEventListener("click", () => {
  closeModal();
});

modalBtnSend.addEventListener("click", () => {
  closeModal();
});
