import { disableScroll, enableScroll } from "./_modal.js";

const headerNav = document.querySelector(".header__nav");
const headerButton = document.querySelector(".header__button");
const headerMobile = document.querySelector(".header__mobile");

const mobileTopContent = document.querySelector(".mobile-top__content");
const mobileBottomContent = document.querySelector(".mobile-bottom__content");
const headerBottom = document.querySelector(".header__bottom");
const headerBottomContent = document.querySelector(".header__bottom-content");
const burger = document.querySelector(".burger");

const bannerTopContent = document.querySelector(".banner__top-content");
const bannerBottomContent = document.querySelector(".banner__bottom-content");
const formWrappers = document.querySelectorAll(".form-wrapper");
const formWrapperFirst = formWrappers[0];
const formWrapperSecond = formWrappers[1];

const creditPromoTopContent = document.querySelector(
  ".credit-promo__top-content"
);
const creditPromoBottomContent = document.querySelector(
  ".credit-promo__bottom-content"
);

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

    bannerBottomContent.append(formWrapperFirst);

    creditPromoBottomContent.append(formWrapperSecond);

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

    bannerTopContent.append(formWrapperFirst);

    creditPromoTopContent.append(formWrapperSecond);

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
