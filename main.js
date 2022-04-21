let bars = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

bars.addEventListener("click", () => {
  bars.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  bars.classList.remove("fa-times");
  navbar.classList.remove("active");
});
