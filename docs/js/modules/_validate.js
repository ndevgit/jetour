import {
  overlay,
  disableScroll,
  enableScroll,
  modal,
  createTitle,
  removeTitle,
  removeTerms,
  createSubtitle,
  removeSubtitle,
  modalForm,
  modalBackground,
} from "./_modal.js";

function formValidate() {
  const forms = document.querySelectorAll(".form");
  forms.forEach((formsElement) => {
    formsElement.addEventListener("submit", function (event) {
      event.preventDefault();
      // console.log(formsElement);

      function createModal() {
        modal.classList.add("modal--visible");
        overlay.classList.add("overlay--visible");
        removeTitle();
        createTitle("Спасибо за заявку");
        createSubtitle("Наш менеджер свяжется с вами в течение 5 минут");
        modalForm.classList.remove("modal__form--visible");
        modalBackground.classList.remove("modal__background--visible");
        removeTerms();
        disableScroll();
      }

      if (validation(this) == true) {
        // console.log("ФОРМА ОТПРАВЛЕНА");
        createModal();
      }
    });
  });

  function validation(form) {
    let result = true;
    const inputs = form.querySelectorAll("input");

    inputs.forEach((inputsElement) => {
      // console.log(inputsElement);

      removeError(inputsElement);
      if (inputsElement.value == "") {
        result = false;
        // console.log("ОШИБКА Поле пустое");

        createError(inputsElement, "Поле не заполнено");
      } else if (inputsElement.type == "checkbox" && !inputsElement.checked) {
        result = false;
        // console.log("ОШИБКА чекбокс не чекнут");

        createError(inputsElement, "Поле не заполнено");
      }
    });

    function createError(input, text) {
      const parentInput = input.parentNode;
      parentInput.classList.add("error");

      const errorText = document.createElement("span");
      errorText.classList.add("error-text");
      errorText.textContent = text;

      input.classList.add("error-border");

      if (input.type == "checkbox") {
        input.nextElementSibling.classList.add("error-border");
      }

      parentInput.append(errorText);
    }

    function removeError(input) {
      const parentInput = input.parentNode;

      if (parentInput.classList.contains("error")) {
        parentInput.querySelector(".error-text").remove();
        parentInput.classList.remove("error");
        input.classList.remove("error-border");

        if (input.type == "checkbox") {
          input.nextElementSibling.classList.remove("error-border");
        }
      }
    }

    return result;
  }
}

export default formValidate;
