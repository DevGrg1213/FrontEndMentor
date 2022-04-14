const arrows = document.querySelectorAll(".arrow-icon");
const questions = document.querySelectorAll(".container__right--question");
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.preventDefault();
    const active = e.target;
    active.classList.toggle("active");
    const parent = active.closest(".container__qa");
    parent.children[0].classList.toggle("active");
    parent.children[2].classList.toggle("block");
  });
});

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    e.preventDefault();
    const active = e.target;
    const parent = active.closest(".container__qa");
    parent.children[0].classList.toggle("active");
    parent.children[1].classList.toggle("active");
    parent.children[2].classList.toggle("block");
  });
});
