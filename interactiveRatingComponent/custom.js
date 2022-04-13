const wrapper = document.querySelector(".wrapper");
const ratingNumber = document.querySelectorAll(".card__rating--number");
const submitBtn = document.querySelector(".card__btn");

let selected = "";
ratingNumber.forEach((item, i, arr) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    arr.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.toggle("active");
    selected = item.classList[1];
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  wrapper.innerHTML = `<div class="card card__grid">
    <img
      src="./images/illustration-thank-you.svg"
      alt="thank you image"
      class="card__image-thankyou block__center"
    />
    <p class="card__score">You selected ${selected} out of 5</p>
    <h2 class="card__heading">Thank you!</h2>
    <p class="card__paragraph text__center mb-zero">
      We appreciate you taking the time to give a rating. If you ever need
      more support,don't hesitate to get in touch!
    </p>
  </div>`;
});
