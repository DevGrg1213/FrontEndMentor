const features = document.querySelector(".features");
const featuresList = document.querySelector(".features__list");
const company = document.querySelector(".company");
const companyList = document.querySelector(".company__list");
const hamburger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const openClose = function (e, child) {
  e.preventDefault();
  child.classList.toggle("active");
  const parent = child.parentElement;
  parent.children[1].classList.toggle("active");
};

features.addEventListener("click", (e) => {
  openClose(e, featuresList);
});

company.addEventListener("click", (e) => {
  openClose(e, companyList);
});

hamburger.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});
