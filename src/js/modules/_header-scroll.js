export default function headerScroll() {
  const headerBottom = document.querySelector(".header__bottom");

  const scrollPosition = 30;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollPosition) {
      headerBottom.classList.add("header__bottom--scroll");
    } else {
      headerBottom.classList.remove("header__bottom--scroll");
    }
  });
}
