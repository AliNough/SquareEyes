const fnameEl = document.querySelector("#js-fname");
const lnameEl = document.querySelector("#js-lname");
const fullNameGrp = document.querySelector("#js-full-name");
const emailEl = document.querySelector("#js-email");
const phnNrEl = document.querySelector("#js-phone-nr");
const passEL = document.querySelector("#js-password");
const passRptEL = document.querySelector("#js-password-rpt");
const cardNrEl = document.querySelector("#js-cardnumber");
const cvcEl = document.querySelector("#js-cvc");

fnameEl.addEventListener("blur", (e) => {
  const fname = e.target.value.trim();
  const min2char = /^[a-zA-Z]{2,}/;
  const validationEle = fullNameGrp.nextElementSibling;

  console.log(validationEle);

  if (min2char.test(fname)) {
    console.log("heelo");
    console.log(fnameEl);
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-error");

    validationEle.classList.remove("show-msg");
    validationEle.classList.add("hide-msg");
  } else {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-error");
    validationEle.innerHTML = "• Please enter you full name";
    validationEle.classList.add("show-msg");
    validationEle.classList.remove("hide-msg");
  }
});

lnameEl.addEventListener("blur", (e) => {
  const lname = e.target.value.trim();
  const min2char = /^[a-zA-Z]{2,}/;
  const validationEle = fullNameGrp.nextElementSibling;

  if (min2char.test(lname)) {
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-error");

    validationEle.classList.remove("show-msg");
    validationEle.classList.add("hide-msg");
  } else {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-error");

    validationEle.innerHTML = "• Please enter you full name";
    validationEle.classList.add("show-msg");
    validationEle.classList.remove("hide-msg");
  }
});

emailEl.addEventListener("blur", (e) => {
  const email = e.target.value.trim();
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const validationEle = e.target.nextElementSibling;

  if (emailRegex.test(email)) {
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-error");
    validationEle.classList.remove("show-msg");
    validationEle.classList.add("hide-msg");
  } else {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-error");

    validationEle.innerHTML = "• Invalid email. Example: john@example.com";
    validationEle.classList.add("show-msg");
    validationEle.classList.remove("hide-msg");
  }
});
phnNrEl.addEventListener("blur", (e) => {
  const phoneNr = e.target.value.trim();
  const nrOnlyRegex = /^[0-9]{8,}$/;
  const validationEle = e.target.nextElementSibling;

  if (nrOnlyRegex.test(phoneNr)) {
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-error");
    validationEle.classList.remove("show-msg");
    validationEle.classList.add("hide-msg");
  } else {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-error");

    validationEle.innerHTML = "• Invalid phone number";
    validationEle.classList.add("show-msg");
    validationEle.classList.remove("hide-msg");
  }
});
passEL.addEventListener("blur", (e) => {
  const pass = e.target.value.trim();
  const passRegex = /^(?=.*[A-Z]).{8,}$/;
  const validationEle = e.target.nextElementSibling;

  if (passRegex.test(pass)) {
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-error");
    validationEle.classList.remove("show-msg");
    validationEle.classList.add("hide-msg");
  } else {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-error");

    validationEle.innerHTML =
      "• password must have atleast 8 characters long. and a capital letter letter";
    validationEle.classList.add("show-msg");
    validationEle.classList.remove("hide-msg");
  }
});

passRptEL.addEventListener("blur", (e) => {
  if (this.value.trim() === passEL.value.trim()) {
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-error");
    validationEle.classList.remove("show-msg");
    validationEle.classList.add("hide-msg");
  } else {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-error");

    validationEle.innerHTML = "• Password does not match";
    validationEle.classList.add("show-msg");
    validationEle.classList.remove("hide-msg");
  }
});

cardNrEl.addEventListener("blur", (e) => {
  const cardNr = this.value.trim();
  const cardRegEx = /\b\d{4}([- ])?\d{4}\1\d{4}\1\d{4}\b/;

  if (cardRegEx.test(cardNr)) {
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-error");
    validationEle.classList.remove("show-msg");
    validationEle.classList.add("hide-msg");
  } else {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-error");

    validationEle.innerHTML =
      "• password must have atleast 8 characters long. and a capital letter letter";
    validationEle.classList.add("show-msg");
    validationEle.classList.remove("hide-msg");
  }
});
cvcEl.addEventListener("blur", (e) => {});
