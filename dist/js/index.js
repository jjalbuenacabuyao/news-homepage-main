const navButton = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

navButton.addEventListener("click", () => {
  const isVisible = nav.getAttribute("data-visible");
  if (isVisible == "false"){
    navButton.setAttribute("aria-expanded", true);
    nav.setAttribute("data-visible", true);
    document.body.style.overflow = 'hidden';
  } else {
    navButton.setAttribute("aria-expanded", false);
    nav.setAttribute("data-visible", false);
  }
})