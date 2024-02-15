export default function swiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,

    spaceBetween: 7,
    slidesPerView: "auto",
    slideToClickedSlide: true,
  });

  //   const slides = document.querySelectorAll(".swiper-slide");
  //   slides.forEach((slidesElement, index) => {
  //     slidesElement.addEventListener("click", () => {
  //       swiper.slideTo(index);
  //     });
  //   });

  //   swiper.on("slideChange", () => {
  //     slides.forEach((slidesElement) => {
  //       slidesElement.classList.remove("item-preview__image--active");
  //     });
  //     slides[swiper.activeIndex].classList.add("item-preview__image--active");
  //   });
}
