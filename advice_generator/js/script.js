const slipId = document.querySelector(".slip__id");
const slipAdvice = document.querySelector(".slip__advice");
const dice = document.querySelector(".card__dice");
dice.addEventListener("click", (e) => {
  e.preventDefault();

  const getAdvice = function () {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(function (data) {
        const {
          slip: { id },
          slip: { advice },
        } = data;
        slipId.textContent = id;
        slipAdvice.textContent = advice;
      })
      .catch((err) => console.log(err.message));
  };
  getAdvice();
});
