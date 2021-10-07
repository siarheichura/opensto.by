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
const modalInputTel = document.getElementById("modalInputTel");
const modalBtnClose = document.getElementById("modalBtnClose");
const modalBtnSend = document.getElementById("modalBtnSend");

function printModal() {
  modalWindow.classList.remove("d-none");
}

function closeModal() {
  modalWindow.classList.add("d-none");
}

const sendMessageTelegram = () => {
  if (modalInputName.value !== "" && modalInputTel.value !== "") {
    let name = modalInputName.value;
    let tel = modalInputTel.value;
    let message = `Имя: ${name}. Телефон: ${tel}`;
    let token = "2069403715:AAFZ-0LpT7i2L0sqjNOsw7ccsChvJK93_Lo";
    let chatId = -463402438;

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;
    fetch(url);
    console.log("Message sent!");
  }
};

const clearInputs = () => {
  modalInputName.value = "";
  modalInputTel.value = "";
};

btnCallMe.addEventListener("click", () => {
  printModal();
});

modalBtnClose.addEventListener("click", () => {
  closeModal();
});

modalBtnSend.addEventListener("click", () => {
  closeModal();
  sendMessageTelegram();
  clearInputs();
});
