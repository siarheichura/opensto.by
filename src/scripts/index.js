import { initMap } from "./map.js";
import { sendTgMessage } from "./telegram.js";

const app = () => {
  ymaps.ready(initMap);
  handleListeners();
};

document.addEventListener("DOMContentLoaded", app);

// DOM Elements

const body = document.querySelector("body");
const btnCallMe = document.getElementById("btnCallMe");
// modal window
const modalWindow = document.getElementById("modalWindow");
const modalInputName = document.getElementById("modalInputName");
const modalInputTel = document.getElementById("modalInputTel");
const modalBtnClose = document.getElementById("modalBtnClose");
const modalBtnSend = document.getElementById("modalBtnSend");
const modalWarning = document.querySelector(".modal__warn");
// documents section
const docsInputTel = document.getElementById("docsInput");
const docsButton = document.getElementById("docsButton");
// questions section
const questionsInputName = document.getElementById("questionsName");
const questionsInputTel = document.getElementById("questionsTel");
const questionsButton = document.getElementById("questionsButton");

// Send message to telegram chat

const printModal = () => {
  modalWindow.classList.remove("d-none");
  body.style.overflow = "hidden";
};

const closeModal = () => {
  modalWindow.classList.add("d-none");
  body.removeAttribute("style");
  modalWarning.style.opacity = "0";
};

const clearInputs = (...inputs) => {
  inputs.forEach((input) => (input.value = ""));
};

const handleListeners = () => {
  btnCallMe.addEventListener("click", () => printModal());
  modalBtnClose.addEventListener("click", () => closeModal());
  modalBtnSend.addEventListener("click", () => {
    if ((!!modalInputName.value, !!modalInputTel.value)) {
      sendTgMessage(modalInputName.value, modalInputTel.value);
      closeModal();
      clearInputs(modalInputName, modalInputTel);
      modalWarning.style.opacity = "0";
    } else {
      modalWarning.style.opacity = "1";
    }
  });

  docsButton.addEventListener("click", () => {
    sendTgMessage("", docsInputTel.value);
    clearInputs(docsInputTel);
  });

  questionsButton.addEventListener("click", () => {
    sendTgMessage(questionsInputName.value, questionsInputTel.value);
    clearInputs(questionsInputName, questionsInputTel);
  });
};

//  ___________________________________________________________________

// Обновление страницы при клике на лого
// const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.reload();
});
