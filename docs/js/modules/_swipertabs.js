export default function swipertabs() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    spaceBetween: 7,
    slidesPerView: "auto",
    slideToClickedSlide: true,
    watchSlidesProgress: true,
  });

  const tabsButtons = document.querySelectorAll("[data-tab]");
  const tabsProducts = document.querySelectorAll("[data-tab-value]");

  tabsButtons.forEach((tabsButtonsElement) => {
    tabsButtonsElement.addEventListener("click", () => {
      //Удалить активный класс
      tabsButtons.forEach((tabsButtonsElement) => {
        tabsButtonsElement.classList.remove("models__tabs-item--active");
      });

      //Добавить активный класс
      tabsButtonsElement.classList.add("models__tabs-item--active");

      tabsProducts.forEach((tabsProductsElement) => {
        if (
          tabsProductsElement.dataset.tabValue == tabsButtonsElement.dataset.tab
        ) {
          tabsProductsElement.classList.remove("displaynone");
        } else {
          tabsProductsElement.classList.add("displaynone");
        }
      });
    });
  });
}
