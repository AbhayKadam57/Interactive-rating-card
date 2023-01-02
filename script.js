const rates = document.querySelectorAll(".rate");

const button = document.querySelector("button");

const Box1 = document.querySelector(".Box");

const Box2 = document.querySelector(".second");

const span = document.querySelector("span");

// console.log(rates);

rates.forEach((rate) => {
  //   rate.addEventListener("click", () => {
  //     console.log("clicked");
  //   });

  rate.onclick = () => {
    // console.log("clicked");

    rates.forEach((rate) => {
      rate.classList.remove("clicked");
    });

    rate.classList.add("clicked");
    console.log(rate.innerText);

    span.innerText = rate.innerText;
  };
});

button.onclick = () => {
  Box1.style.display = "none";
  Box2.style.display = "flex";
};
