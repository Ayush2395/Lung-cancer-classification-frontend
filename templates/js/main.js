const handleShowHomeButton = () => {
  const scrollY = window.pageYOffset;
  const arrowBtn = document.querySelector(".up_btn");
  scrollY >= 540
    ? arrowBtn.classList.add("show-up-btn")
    : arrowBtn.classList.remove("show-up-btn");
};

window.addEventListener("scroll", handleShowHomeButton);

console.log("Ayush");
