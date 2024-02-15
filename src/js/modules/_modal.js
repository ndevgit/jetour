const callback = document.querySelectorAll(".callback");
const credit = document.querySelectorAll(".credit-btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal__background");
const modalMiddleContent = document.querySelector(".modal__middle-content");
const modalBottomContent = document.querySelector(".modal__bottom-content");
const buttonClose = document.querySelector(".modal__button-close");
const modalForm = document.querySelector(".modal__form");

//Создать заголовок
function createTitle(titleText) {
  const modalTitleWrapper = document.createElement("div");
  const modalTitle = document.createElement("h2");

  modalTitleWrapper.classList.add("modal__title-wrapper");

  modalMiddleContent.append(modalTitleWrapper);

  modalTitle.classList.add("modal__title");
  modalTitle.innerText = titleText;
  modalTitleWrapper.append(modalTitle);
}
//Удалить заголовок
function removeTitle() {
  const modalTitleWrapper = document.querySelector(".modal__title-wrapper");

  if (modalTitleWrapper) {
    modalTitleWrapper.remove();
  }
}

//Создать блок с условиями
function createTerms() {
  const modalTerms = document.createElement("div");
  modalTerms.classList.add("modal__terms");
  modalTerms.innerHTML =
    '<p class="modal__term">Льготная ставка от 4,9%</p> <p class="modal__term">Дополнительная скидка до 70 000Р</p> <p class="modal__term">Досрочное погашение без штрафов</p> <p class="modal__term">3 месяца кредитный каникул</p>';

  return modalTerms;
}
//Удалить блок с условиями
function removeTerms() {
  const termsElement = document.querySelector(".modal__terms");

  if (termsElement) {
    termsElement.remove();
  }
}

function createSubtitle(subtitleText) {
  const modalSubtitleWrapper = document.createElement("div");
  const modalSubtitle = document.createElement("p");

  modalSubtitleWrapper.classList.add("modal__subtitle-wrapper");

  modalMiddleContent.append(modalSubtitleWrapper);

  modalSubtitle.classList.add("modal__subtitle");
  modalSubtitle.innerText = subtitleText;
  modalSubtitleWrapper.append(modalSubtitle);
}

function removeSubtitle() {
  const modalSubtitleWrapper = document.querySelector(
    ".modal__subtitle-wrapper"
  );

  if (modalSubtitleWrapper) {
    modalSubtitleWrapper.remove();
  }
}

//Открыть модальное окно обратный звонок/зафиксировать цену
callback.forEach((callbackElement) => {
  callbackElement.addEventListener("click", () => {
    overlay.classList.add("overlay--visible");
    modal.classList.add("modal--visible");
    modal.classList.add("modal--fix");
    modalBackground.classList.add("modal__background--visible");

    createTitle("Заполните заявку на персональное предложение от Jetour");

    const modalTitleWrapper = document.querySelector(".modal__title-wrapper");
    modalTitleWrapper.classList.add("modal__title-wrapper--callback");
    modalForm.classList.add("modal__form--visible");

    disableScroll();
  });
});

//Открыть модальное окно кредит
credit.forEach((creditElement) => {
  creditElement.addEventListener("click", () => {
    overlay.classList.add("overlay--visible");
    modal.classList.add("modal--visible");
    modal.classList.add("modal--credit");

    createTitle("Кредит на Jetour без первоначального взноса");

    const modalTitleWrapper = document.querySelector(".modal__title-wrapper");
    modalTitleWrapper.classList.add("modal__title-wrapper--credit");

    const termsElement = createTerms();

    modalMiddleContent.append(termsElement);

    modalForm.classList.add("modal__form--visible");

    disableScroll();
  });
});

//Отключение скролла и прыжка контента при открытии модального окна или мобильного меню
const fixJump = document.querySelectorAll(".fix-jump");

function disableScroll() {
  const paddingOffset = window.innerWidth - document.body.offsetWidth + "px";

  document.body.classList.add("body--overflow-hidden");

  fixJump.forEach((fixJumpElement) => {
    fixJumpElement.style.paddingRight = paddingOffset;
  });

  document.body.style.paddingRight = paddingOffset;
}

//Закрыть модальное окно
buttonClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--visible");
  modal.classList.remove("modal--visible");
  modal.classList.remove("modal--fix");
  modal.classList.remove("modal--credit");
  modalBackground.classList.remove("modal__background--visible");
  modalForm.classList.remove("modal__form--visible");

  removeTitle();
  removeTerms();
  removeSubtitle();

  enableScroll();
});

//Закрыть модального окна откликиванием мыши
overlay.addEventListener("click", function (event) {
  if (event.target == overlay) {
    overlay.classList.remove("overlay--visible");
    modal.classList.remove("modal--visible");
    modal.classList.remove("modal--fix");
    modal.classList.remove("modal--credit");
    modalBackground.classList.remove("modal__background--visible");
    modalForm.classList.remove("modal__form--visible");

    removeTitle();
    removeTerms();
    removeSubtitle();

    enableScroll();
  }
});

//Включение скролла и прыжка контента при открытии модального окна или мобильного меню
function enableScroll() {
  document.body.classList.remove("body--overflow-hidden");

  fixJump.forEach((fixJumpElement) => {
    fixJumpElement.style.paddingRight = "0px";
  });

  document.body.style.paddingRight = "0px";
}

export {
  disableScroll,
  enableScroll,
  overlay,
  modal,
  createTitle,
  removeTitle,
  removeTerms,
  createSubtitle,
  removeSubtitle,
  modalForm,
  modalBackground,
};
