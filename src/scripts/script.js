// Создание карты

ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [53.94038081294873, 27.596907882932577],
    zoom: 17,
  });
}

// Появление модального окна

const btnCallMe = document.getElementById("btnCallMe");
const modalWindow = document.getElementById("modalWindow");

btnCallMe.addEventListener("click", () => {
  modalWindow.classList.remove("d-none");
});

// Модальное окно

const modalInputName = document.getElementById("modalInputName");
const modalInputEmail = document.getElementById("modalInputEmail");
const modalBtn = document.getElementById("modalBtn");
