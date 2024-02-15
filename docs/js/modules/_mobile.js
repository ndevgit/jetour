import { disableScroll, enableScroll } from "./_modal.js";

const headerNav = document.querySelector(".header__nav");
const headerButton = document.querySelector(".header__button");
const headerMobile = document.querySelector(".header__mobile");

const mobileTopContent = document.querySelector(".mobile-top__content");
const mobileBottomContent = document.querySelector(".mobile-bottom__content");
const headerBottom = document.querySelector(".header__bottom");
const headerBottomContent = document.querySelector(".header__bottom-content");
const burger = document.querySelector(".burger");

//Флаг для проверки скролла
let scrollDisabled = false;

function openMenu() {
  burger.addEventListener("click", () => {
    headerMobile.classList.toggle("header__mobile--visible");
    headerBottom.classList.toggle("header__bottom--mobile");
    burger.classList.toggle("burger--open");

    //Отключение скролла
    if (!scrollDisabled) {
      disableScroll();
      scrollDisabled = true;
    } else {
      enableScroll();
      scrollDisabled = false;
    }
  });
}

//Флаги для проверки запуска функций
let moveElementsStarted = false;
let restoreElementsStarted = false;

function moveElements() {
  if (!moveElementsStarted && window.innerWidth <= 992) {
    mobileTopContent.append(headerNav);
    mobileBottomContent.append(headerButton);

    //Флаги для проверки запуска функций
    moveElementsStarted = true;
    restoreElementsStarted = false;
    // console.log("moveElementsStarted true");
  }
}

function restoreElements() {
  if (!restoreElementsStarted && window.innerWidth > 992) {
    headerBottomContent.append(headerNav);
    headerBottomContent.append(headerButton);

    //Флаги для проверки запуска функций
    restoreElementsStarted = true;
    moveElementsStarted = false;
    // console.log("restoreElementsStarted true");
  }
}

window.addEventListener("resize", () => {
  moveElements();
  restoreElements();
});

export { moveElements, restoreElements, openMenu };
