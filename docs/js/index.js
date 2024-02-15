import { disableScroll, enableScroll } from "./modules/_modal.js";
import swiper from "./modules/_swiper.js";
import headerScroll from "./modules/_header-scroll.js";
import { moveElements, restoreElements, openMenu } from "./modules/_mobile.js";
import formValidate from "./modules/_validate.js";

window.addEventListener("DOMContentLoaded", () => {
  disableScroll();
  enableScroll();
  swiper();
  headerScroll();
  moveElements();
  restoreElements();
  openMenu();
  formValidate();
});
