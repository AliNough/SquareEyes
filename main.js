const profNavBtn = document.querySelector("#js-profile-nav-trigger");
const profNavHolder = document.querySelector("#js-profile-nav-content");
const button = document.getElementById("js-toggle-button");
const menu = document.getElementById("js-menu");
const planType1Ele = document.querySelector("#sub-type1");
const planType2Ele = document.querySelector("#sub-type2");
const monthlyPlanWin = document.querySelector("#js-mnt-plan-holder");
const annualPlanWin = document.querySelector("#js-annual-plan-holder");

let clicked = false;

if (planType1Ele) {
  planType1Ele.addEventListener("click", () => {
    monthlyPlanWin.classList.add("selected");
    annualPlanWin.classList.remove("selected");
  });
  planType2Ele.addEventListener("click", () => {
    monthlyPlanWin.classList.remove("selected");
    annualPlanWin.classList.add("selected");
  });
}

button.addEventListener("click", () => {
  menu.classList.toggle("is-visible");
});

profNavBtn.addEventListener("click", () => {
  profNavHolder.classList.toggle("is-visible");
});
